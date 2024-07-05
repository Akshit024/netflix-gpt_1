import React, { useEffect } from "react";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO } from "../utils/constants.js";
import { toggelGptSearchView } from "../utils/gptSlice.js";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubsrcibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubsrcibe();
  }, []);

  const handleGptSearchClick = () =>{
     dispatch(toggelGptSearchView());
  }

  return (
    <div className="absolute flex w-full px-6 py-1 bg-gradient-to-b from-black z-10 justify-between flex-col md:flex-row ">
      <img
        className="w-40 md:mx-0 mx-auto"
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="flex p-4 justify-between md:justify-center">
          <button className="py-2 px-2 m-2 bg-purple-500 text-white rounded-lg"
          onClick={handleGptSearchClick}
          >GPT search</button>
          <div className="flex">
          <img className="w-10 h-10 mt-2 " src={user.photoURL} alg="user" />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
