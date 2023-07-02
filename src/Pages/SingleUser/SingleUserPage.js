import { useContext, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

import { DataContext } from "../../";
import PostCards from "../Posts/PostsCards";
import UserCard from "../Users/userCard";
import NavLinks from "../../Navbar/NavLinks";

export default function SingleUsers() {
  const { userDetails, state, getSinglePostData, followUser, unFollowUser } =
    useContext(DataContext);
  const posts = state.postData;
  const {
    _id,
    avatar,
    fullName,
    bio,
    website,
    username,
    followers,
    following,
  } = userDetails;

  const [follower, setFollower] = useState(
    state?.currentUser?.following.filter((item) => item.username === username)
      .length === 1
  );

  const followings = () => {
    if (
      state?.currentUser?.following.filter((item) => item.username === username)
        .length === 1
    ) {
      unFollowUser(_id);
      setFollower(false);
    } else {
      followUser(_id);
      setFollower(true);
    }
  };

  const userPosts = posts.filter((item) => item.username === username);

  // console.log(following.length ?? 0)
  const otherUsers = state.userData
    .filter((item) => item._id !== _id)
    .filter((item) => item.username !== state.currentUser.username);

  return (
    <div id="userProfile">
      <div>
        <NavLinks />
      </div>
      <div>
        <img src={avatar} alt={username} className="userProfileAvatar" />
        <h3>{`${fullName}`}</h3>
        <p>
          @{username}{" "}
          <a href={website} target="_blank">
            <FiExternalLink />
          </a>{" "}
        </p>
        <p>
          followers: {followers?.length === 0 ? 0 : followers?.length} &nbsp;
          following: {following?.length === 0 ? 0 : following?.length} &nbsp;
          Posts: {userPosts?.length === 0 ? 0 : userPosts?.length}
          <p
            className="followButton"
            style={{ paddingTop: "0", cursor: "pointer" }}
            onClick={followings}
          >
            {!follower ? "FOLLOW" : "UNFOLLOW"}
          </p>
        </p>
        <p>
          <BiSolidQuoteSingleLeft />
          <i>{bio}</i>
        </p>

        <div>
          <h3>Posts by this user</h3>
          <ul>
            {userPosts.length !== 0
              ? userPosts.map((item) => {
                  const { _id, content, createdAt, likes } = item;
                  return (
                    <li key={_id} style={{ listStyle: "none" }}>
                      <PostCards
                        props={{
                          _id,
                          username,
                          content,
                          avatar,
                          createdAt,
                          likes,
                          getSinglePostData,
                        }}
                      />
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
      <div>
        <ul className="userListing">
          <h3>Similar Content Creators</h3>
          {otherUsers.map((item) => {
            const { username, fullName, avatar } = item;
            const id = item._id;
            return (
              <li key={id} style={{ listStyle: "none" }}>
                <UserCard props={{ id, username, fullName, avatar }} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
