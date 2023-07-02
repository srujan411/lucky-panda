import { useContext } from "react";

import { DataContext } from "../../";
import PostCards from "./PostsCards";

export default function PostsComponent() {
  const { state, getSinglePostData, userDetails } = useContext(DataContext);
  
  const userData = state?.userData;
  const postData = state?.postData.filter(
    (item) =>
      state?.currentUser.following
        .map((item) => item.username)
        .includes(item.username) || item.username === state?.currentUser.username
  );

  // console.log(
  //   state?.postData.filter(
  //     (item) =>
  //       state?.currentUser.following
  //         .map((item) => item.username)
  //         .includes(item.username) || item.username === state?.currentUser.username
  //   )
  // );

  return (
    <div id="posts">
      <ul>
        {postData?.map((item) => {
          const { _id, username, content, createdAt, likes } = item;

          const postUser = userData?.filter(
            (item) => item.username === username
          )[0];
          return (
            <li key={_id} style={{ listStyle: "none" }}>
              <PostCards
                props={{
                  item,
                  _id,
                  createdAt,
                  username,
                  content,
                  avatar: postUser.avatar,
                  likes,
                  getSinglePostData,
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
