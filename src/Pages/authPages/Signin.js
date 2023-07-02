import { useContext, useState } from "react";
import "./signin.css";
import img from "../../logo-no-background.png";
import { AuthContext } from "../../";
import { Link } from "react-router-dom";

export default function Signin() {
  const { loginHandler } = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({
    user_name: "",
    pass_word: "",
  });
  const usernameHandler = (e) => {
    setUserDetails({ ...userDetails, user_name: e.target.value });
  };

  const passwordhandler = (e) => {
    setUserDetails({ ...userDetails, pass_word: e.target.value });
  };

  const signinHandler = () => {
    loginHandler(userDetails);
  };

  const guestSignin = () => {
    loginHandler({ user_name: "adarshbalika", pass_word: "adarshBalika123" });
  };

  return (
    <div id="background">
      <div className="signin">
        <h2>
          <img src={img} alt="logo" style={{ maxHeight: "150px" }} />
        </h2>
        <div>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => usernameHandler(e)}
          />
          <br />
          <input
            type="password"
            placeholder="*******"
            onChange={(e) => passwordhandler(e)}
          />
          <br />
          <button onClick={signinHandler}>Sign-In</button>
        </div>
        <p>
          Sign in as <button onClick={guestSignin}>guest</button>
        </p>
        <p>
          Not Registered? Click{" "}
          <Link to="/signup" style={{ textDecoration: "none", color: "red" }}>
            here
          </Link>{" "}
          to register
        </p>
      </div>
    </div>
  );
}
