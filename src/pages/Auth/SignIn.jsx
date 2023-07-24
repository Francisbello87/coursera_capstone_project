import React, { useState } from "react";
import Button from "../../components/Button/Button";
// import { signIn } from "../../utils/HelperFunctions";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setError } from "../../redux/authSlice";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const errors = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      dispatch(setError("Please enter both email and password."));
      return;
    }
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser(user));
        console.log(userCredential);
        setIsLoading(false);
        navigate("/");
      })
      .catch((error) => {
        dispatch(setError(error.message));
        console.log(error);
        setIsLoading(false);
      });
  };
  return (
    <div className=" bg-primaryColor h-screen w-full ">
      <Nav />
      <div className="px-4 md:pt-24 md:px-64  bg-brownColor md:bg-primaryColor h-full w-full flex flex-col justify-center">
        <h3 className=" font-extrabold capitalize markazi md:text-4xl text-center  text-2xl text-white">
          Sign In to collect points
        </h3>
        <div className="md:bg-secondaryColor md:py-12 md:px-28 mb-7 mt-6 w-full md:max-w-[53.75rem]">
          {errors && <div className="text-red-500">{errors}</div>}
          <form
            onSubmit={handleSignIn}
            className=" flex flex-col   w-full"
          >
            <input
              className=" w-full py-2 px-2 outline-none caret-primaryColor rounded"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <input
              className=" w-full py-2 px-2 outline-none caret-primaryColor rounded my-4"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <div className=" flex items-center justify-between">
              <span>
                <p>
                  No accout yet? <Link className=" text-primaryColor font-bold" to="/signup">Sign Up</Link> here.
                </p>
              </span>
              <Button
                text={isLoading ? "Signing you in..." : "Sign In"}
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
