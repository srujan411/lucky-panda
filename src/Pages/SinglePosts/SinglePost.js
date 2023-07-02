import { useContext, useState } from "react";
import { DataContext } from "../../";
import { useParams } from "react-router-dom";
import NavLinks from "../../Navbar/NavLinks";
import UsersComponent from "../Users/Users";
import PostCards from "../Posts/PostsCards";
import Loader from "../Loaders/Loader";

export default function SinglePost() {
  const { state, postById, likePost, dislikePost } = useContext(DataContext);

  const { postId } = useParams();

  const userPosts = postById[0];

  const { _id, likes, createdAt, content, username } = userPosts;

  const { avatar } = postById[1];

  return (
    <div className="container">
      <div>
        <NavLinks />
      </div>
      <div>
        {/* {postById?.map((item)=>{
                    const {_id, content,likes, createdAt, username, } = item;
                    const {avatar} = state.userData.filter((item)=>item.username === username)[0];
                    return (<PostCards props={{_id,content,likes, createdAt, username, avatar }}/>)
                })} */}

          <PostCards
            props={{
              _id,
              content,
              likes,
              createdAt,
              username,
              avatar,
              likePost,
              dislikePost,
            }}
          />
      
      </div>
      <div>
        <UsersComponent />
      </div>
    </div>
  );
}
