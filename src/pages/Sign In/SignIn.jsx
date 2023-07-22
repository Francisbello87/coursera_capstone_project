import React, { useState } from "react";
// import { auth } from "../../firebase/firebaseConfig";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <div>
      <h3 className=" font-extrabold markazi md:text-4xl text-center  text-2xl text-white">
        Find a table for any occasion
      </h3>
    </div>
  );
};

export default SignIn;
