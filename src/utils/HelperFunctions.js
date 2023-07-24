import { useEffect } from "react";
// import { auth } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { setUser, setError, signOut } from "../redux/authSlice";
// import { log } from "console";


export const generateTimeOptions = () => {
  const startTime = new Date();
  startTime.setHours(10, 0, 0); // Start time: 10:00 AM
  const endTime = new Date();
  endTime.setHours(22, 0, 0); // End time: 10:00 PM
  const interval = 15; // Interval between time options in minutes

  const options = [];
  let time = new Date(startTime);

  while (time <= endTime) {
    const formattedTime = time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    options.push(formattedTime);
    time.setMinutes(time.getMinutes() + interval);
  }

  return options;
};

export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export const getInitialsFromDisplayName = (displayName) => {
  if (displayName) {
    const fullName = displayName;
    const [firstName, lastName] = fullName.split(" ");
    const firstNameInitial = firstName.charAt(0).toUpperCase();
    const lastNameInitial = lastName.charAt(0).toUpperCase();
    return firstNameInitial + lastNameInitial;
  }
  return "";
};