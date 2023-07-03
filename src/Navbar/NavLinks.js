import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import { BiCompass, BiBookmarks } from "react-icons/bi";
import logo from "../logo-no-background.png";

import { DataContext } from "../ContextProvider/DataProvider";

export default function NavLinks() {
  const { state } = useContext(DataContext);
  const getActiveStyle = ({ isActive }) => ({
    textDecoration: isActive ? "none" : "none",
    fontWeight: isActive ? "700" : "300",
  });
  const currentUser = state.currentUser;

  const logOut = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ maxHeight: "100px", objectFit: "fill" }}
        />
      </Link>
      <nav className="navlink">
        <NavLink className="link" style={getActiveStyle} to="/">
          <GoHomeFill
            style={{ margin: "-4px", paddingRight: "10px", fontSize: "20px" }}
          />
          Home
        </NavLink>
        <NavLink className="link" to="/explore" style={getActiveStyle}>
          <BiCompass
            style={{ margin: "-4px", paddingRight: "10px", fontSize: "20px" }}
          />
          Explore
        </NavLink>
        <NavLink className="link" to="/saved" style={getActiveStyle}>
          <BiBookmarks
            style={{ margin: "-4px", paddingRight: "10px", fontSize: "20px" }}
          />
          Saved
        </NavLink>
        <NavLink className="link" to="/profile" style={{ paddingTop: "10rem" }}>
          <img
            className="avatar"
            src={currentUser.avatar}
            alt="userProfile"
            style={{ margin: "-1.3rem 0rem" }}
          />
          <span style={{ margin: "0 1rem" }}>
            @{currentUser.username} <br />
          </span>
          <br />
          <br />
          <br />
          <button
            style={{
              width: "30%",
              border: "2px solid white",
              borderRadius: "10px",
              backgroundColor: "black",
            }}
            onClick={logOut}
          >
            <Link
              style={{ textDecoration: "none", color: "aliceblue" }}
              to="/signin"
            >
              <AiOutlineLogout size={15} style={{marginBottom:"-3px"}}/>
              Logout
            </Link>
          </button>
        </NavLink>
      </nav>
    </div>
  );
}
