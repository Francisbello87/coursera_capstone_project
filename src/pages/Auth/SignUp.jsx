import React, { useState } from "react";
import Button from "../../components/Button/Button";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setError } from "../../redux/authSlice";
import {
  setFirstName,
  setLastName,
  setPhonenumber,
  setEmail,
  setPassword,
  setConfirmPassword,
} from "../../redux/userDataSlice";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";
import { setUserData } from "../../redux/userDataSlice";

const SignUp = () => {
  const userData = useSelector((state) => state.userData);
  const [isLoading, setIsLoading] = useState(false);
  const errors = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleSignUp = (e) => {
    const {
      firstName,
      lastName,
      phonenumber,
      email,
      password,
      confirmPassword,
    } = userData;

    e.preventDefault();
    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !phonenumber ||
      !confirmPassword
    ) {
      dispatch(setError("Please fill in all fields."));
      return;
    }
    if (password !== confirmPassword) {
      dispatch(setError("Passwords do not match."));
      return;
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(
      auth,
      email,
      password,
      firstName,
      lastName,
      phonenumber
    )
      .then((userCredential) => {
        const user = userCredential.user;
        // Update the user profile with the displayName (firstName + lastName)
        updateProfile(user, { displayName: `${firstName} ${lastName}` })
          .then(() => {
            console.log("User account created successfully with displayName.");
            dispatch(setUser(user));
            dispatch(setUserData({ firstName, lastName }));
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
            dispatch(setError("An error occurred while creating the account."));
            setIsLoading(false);
          });
      })
      .catch((error) => {
        dispatch(setError(error.message));
        console.log(error);
        setIsLoading(false);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
      });
  };

  const clearErrors = () => {
    dispatch(setError(""));
  };

  return (
    <div className=" bg-primaryColor h-screen w-full ">
      <Nav />
      <div className="px-4 md:pt-24 md:px-64  bg-brownColor md:bg-primaryColor h-full w-full flex flex-col justify-center">
        <h3 className=" font-extrabold capitalize markazi md:text-4xl text-center  text-2xl text-white">
          Create an account
        </h3>
        <div className="md:bg-secondaryColor md:py-8 md:px-28 mb-7 mt-4 w-full md:max-w-[53.75rem]">
          {showPopup && (
            <div className="popup">
              {errors && <div className="text-white">{errors}</div>}
            </div>
          )}
          {/* {errors && <div className="text-red-500">{errors}</div>} */}
          <form onSubmit={handleSignUp} className=" flex flex-col   w-full">
            <input
              className=" w-full py-2 px-2 outline-none caret-primaryColor rounded my-3"
              type="text"
              value={userData.firstName}
              onChange={(e) => dispatch(setFirstName(e.target.value))}
              onFocus={clearErrors}
              placeholder="Enter your first name"
            />
            <input
              className=" w-full py-2 px-2 outline-none caret-primaryColor rounded my-3"
              type="text"
              value={userData.lastName}
              onChange={(e) => dispatch(setLastName(e.target.value))}
              onFocus={clearErrors}
              placeholder="Enter your last name"
            />
            <input
              className=" w-full py-2 px-2 outline-none caret-primaryColor rounded my-3"
              type="tel"
              value={userData.phonenumber}
              onChange={(e) => dispatch(setPhonenumber(e.target.value))}
              onFocus={clearErrors}
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Enter your phone number"
            />
            <input
              className=" w-full py-2 px-2 outline-none caret-primaryColor rounded my-3"
              type="email"
              value={userData.email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              onFocus={clearErrors}
              placeholder="Enter your email"
            />
            <input
              className=" w-full py-2 px-2 outline-none caret-primaryColor rounded my-3"
              type="password"
              value={userData.password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              onFocus={clearErrors}
              placeholder="Enter your password"
            />
            <input
              className=" w-full py-2 px-2 outline-none caret-primaryColor rounded my-3"
              type="password"
              value={userData.confirmPassword}
              onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
              onFocus={clearErrors}
              placeholder="Confirm your password"
            />
            <div className=" flex items-center justify-between flex-col md:flex-row">
              <span>
                <p className=" md:text-black w-full text-secondaryColor text-sm md:text-base">
                  Already have an account{" "}
                  <Link
                    className=" md:text-primaryColor text-pryColor font-bold"
                    to="/signin"
                  >
                    Sign In
                  </Link>{" "}
                  here.
                </p>
              </span>
              <div className=" md:w-[40%] w-full text-right mt-5 ">
                <Button
                  text={isLoading ? "Signing you up..." : "Sign Up"}
                  disabled={isLoading}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
