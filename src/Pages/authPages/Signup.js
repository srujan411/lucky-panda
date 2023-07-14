import { useContext, useState } from "react";
import "./signup.css";
import { AuthContext } from "../../";
import UserAvatar from "../SingleUser/UserAvatar";
import img from "../../logo-no-background.png";
import { Link } from "react-router-dom";

export default function Signup() {
  const { SignUpHandler } = useContext(AuthContext);
  const [confirmPass, setConfirmPass] = useState(false);
  const [userDetails, setUserDetails] = useState({
    useravatar: "",
    full_name: "",
    user_name: "",
    email_address: "",
    pass_word: "",
  });

  const avatarHandler = (userAvatar) => {
    setUserDetails({ ...userDetails, useravatar: userAvatar });
  };

  const fullnameHandler = (e) => {
    console.log(e.target.value)
    setUserDetails({ ...userDetails, full_name: e.target.value });
  };
  const usernameHandler = (e) => {
    setUserDetails({ userDetails, user_name: e.target.value });
  };
  const emailHandler = (e) => {
    setUserDetails({ ...userDetails, email_address: e.target.value });
  };
  const passwordHandler = (e) => {
    setUserDetails({ ...userDetails, pass_word: e.target.value });
  };
  const confirmPassword = (e) => {
    if (e.target.value !== userDetails.pass_word) {
      setConfirmPass(!confirmPass);
    }
  };
  const clickHandler = () => {
    SignUpHandler(userDetails);
  };

  return (
    <div className="signup">
      <h2>
        <img src={img} alt="logo" style={{ maxHeight: "150px" }} />
      </h2>
      <h2>Sign-Up</h2>
      <div>
        <UserAvatar props={{ avatarHandler }} />
        <br />
        <input
          type="text"
          onChange={(e) => fullnameHandler(e)}
          placeholder="John Doe"
        />
        <br />
        <input
          type="text"
          onChange={(e) => usernameHandler(e)}
          placeholder="username"
        />
        <input
          type="email"
          onChange={(e) => emailHandler(e)}
          placeholder="john@doe.com"
        />
        <input
          type="password"
          onChange={(e) => passwordHandler(e)}
          placeholder="*************"
        />
        <input
          type="password"
          onChange={(e) => confirmPassword(e)}
          placeholder="*************"
        />
        <br />
        <input type="checkbox" />
        <label>I accept all Terms & Conditions </label>
        <br />
        <button disabled={confirmPass} onClick={clickHandler}>
          Register
        </button>
        /
        <button>
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "aliceblue" }}
          >
            Sign-in
          </Link>
        </button>
      </div>
    </div>
  );
}
