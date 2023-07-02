import { useContext } from "react";
import { DataContext } from "../../";
import NavLinks from "../../Navbar/NavLinks";
import UsersComponent from "../Users/Users";
import PostCards from "../Posts/PostsCards";

export default function BookMark() {
  const { state, postById, likePost, dislikePost, removeBookmarkedPost } =
    useContext(DataContext);

  const bookmarks = state?.bookMarkedData;
  return (
    <div className="container Bookmarks">
      <div>
        <NavLinks />
      </div>
      <div className="posts">
        {bookmarks?.map((item) => {
          const { _id, content, createdAt, username } = item;
          const { avatar } = state.userData.filter(
            (item) => item.username === username
          )[0];
          const { likes } = state.postData.filter(
            (postItem) => postItem._id === _id
          )[0];
          return (
            <PostCards
              props={{ _id, content, likes, createdAt, username, avatar }}
            />
          );
        })}
      </div>
      <div>
        <UsersComponent />
      </div>
    </div>
  );
}
