import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DataReducer, { INITIAL_STATE } from "../Reducer/Reducer";
import { DataContext } from "./DataProvider";
import { responsiveFontSizes } from "@material-ui/core";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { getCurrentUser } = useContext(DataContext);

  const navigate = useNavigate();
  const location = useLocation();
  const [state, dispatch] = useReducer(DataReducer, INITIAL_STATE);

  const loginHandler = async (userDetails) => {
    const { user_name, pass_word } = userDetails;
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await axios.post(`/api/auth/login`, {
        username: user_name,
        password: pass_word,
      });
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ encodedToken, currentUser: foundUser })
        );
        getCurrentUser();
        dispatch({
          type: "USER_LOGGED_IN",
          payload: true,
        });

        navigate(location?.state?.pathname ?? "/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const SignUpHandler = async (userDetails) => {
    const { full_name, user_name, email_address, pass_word, useravatar } =
      userDetails;
      console.log(full_name)
    try {
      const {
        status,
        data: { createdUser, encodedToken },
      } = await axios.post(`/api/auth/signup`, {
        avatar: useravatar,
        bio: "add a bio",
        website: "add a website",
        fullName: full_name,
        username: user_name,
        email: email_address,
        password: pass_word,
      });
      console.log(createdUser);
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ encodedToken, currentUser: createdUser })
        );
        getCurrentUser();
        dispatch({
          type: "USER_LOGGED_IN",
          payload: true,
        });
        navigate(location?.state?.pathname ?? "/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ loginHandler, SignUpHandler, state }}>
      {children}
    </AuthContext.Provider>
  );
}
