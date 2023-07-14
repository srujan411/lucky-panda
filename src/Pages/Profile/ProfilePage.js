import { useContext, useState } from "react";
import { DataContext } from "../../";
import PostCards from "../Posts/PostsCards";
import UserCard from "../Users/userCard";
import NavLinks from "../../Navbar/NavLinks";
import EditProfile from "./EditProfile";

import { FiExternalLink } from "react-icons/fi";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

export default function ProfilePage() {
  const { state, setIsOpen, getSinglePostData } = useContext(DataContext);

  const posts = state.postData;
  const { _id, avatar, fullName,  username, followers, following, bio, website } =
  state.currentUser;
  const userPosts = posts.filter((item) => item.username === username);
  const otherUsers = state.userData
    .filter((item) => item._id !== _id)
    .filter((item) => item.username !== state.currentUser.username);
  const openModal = () =>{
    setIsOpen(true)
  }
  return (
    <div className="container" id="userProfile">
      <div>
        <NavLinks />
      </div>
      <div>
        <img src={avatar} alt={username} className="userProfileAvatar" />
        <h3>{console.log(fullName)}</h3>
        <p>@{username} <a href={website} target="_blank">
            <FiExternalLink />
          </a></p>
        <button style={{border:"none"}} onClick={openModal}><i>edit profile</i></button>
        <p>
          followers: {followers.length} &nbsp; following: {following.length}{" "}
          &nbsp; Posts: {userPosts.length}
        </p>
        <p><BiSolidQuoteSingleLeft /><i>{bio}</i></p>
            <EditProfile/>
        <div>
          <h3>Posts by this user</h3>
          <ul>
            {userPosts.length !== 0
              ? userPosts.map((item) => {
                  const { _id, content, createdAt, likes } = item;
                  return (
                    <li key={_id} style={{ listStyle: "none" }}>
                      <PostCards props={{ _id, username, content, avatar, createdAt, likes, getSinglePostData, }} />
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
            const { username, fullName,  avatar } = item;
            const id = item._id;
            return (
              <li key={id} style={{ listStyle: "none" }}>
                <UserCard
                  props={{ id, username, fullName,  avatar }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
