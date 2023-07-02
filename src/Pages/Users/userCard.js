import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../";
export default function UserCard({ props }) {
  const { state,getSingleUser, followUser, unFollowUser } = useContext(DataContext);
  const { id, username, fullName, avatar } = props;

  const [follower, setFollower] = useState(state?.currentUser?.following.filter((item) => item.username === username)
  .length === 1);

  const following = () => {
    if (
      state?.currentUser?.following.filter((item) => item.username === username)
        .length === 1
    ) {
      unFollowUser(id);
      setFollower(false);
    } else {
      followUser(id);
      setFollower(true);
    }
  };
  return (
    <div className="userCard container">
      <div
        style={{
          paddingTop: "px",
          // marginRight: "-2.5rem"
        }}
      >
        <Link
          to={`/users/${id}`}
          style={{ textDecoration: "none" }}
          onClick={() => {
            getSingleUser(id);
          }}
        >
          <img src={avatar} alt={username} className="avatar" />
        </Link>
      </div>
      <div className="username">
        <Link
          to={`/users/${id}`}
          style={{ textDecoration: "none", color: "white" }}
          onClick={() => {
            getSingleUser(id);
          }}
        >
          <h4 style={{ marginBottom: "-10px" }}>{fullName}</h4>
          <p>@{username}</p>
        </Link>
      </div>
      <p
        className="followButton"
        style={{ paddingTop: "20px", cursor: "pointer" }}
        onClick={following}
      >
        {!follower ? "FOLLOW" : "UNFOLLOW"}
      </p>
    </div>
  );
}
