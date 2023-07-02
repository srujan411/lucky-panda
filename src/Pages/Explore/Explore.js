import { useContext, useState } from "react";
import NavLinks from "../../Navbar/NavLinks";
import PostCards from "../Posts/PostsCards";
import UsersComponent from "../Users/Users";
import { DataContext } from "../../";

export default function ExplorePage() {
  const { state, getSinglePostData, userDetails } = useContext(DataContext);

  const [postData, setPostData] = useState([...state?.postData])

  const userData = state?.userData;

    const sortByDate = () =>{
        setPostData([...state?.postData.sort((a,b)=>new Date(b?.createdAt) - new Date(a?.createdAt))])
    }
    const sortByTrending  = () =>{
        setPostData([...state?.postData.sort((a,b)=>b?.likes?.likeCount - a?.likes?.likeCount)])
    }

  return (
    <div className="explore container">
      <div>
        <NavLinks />
      </div>
      <div>
        <p>Sort By</p>
        <button className="sortingButton" onClick={sortByTrending}>Trending Posts</button> &nbsp;&nbsp;&nbsp;
        <button className="sortingButton" onClick={sortByDate}>Newer posts</button>
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
      </div>
      <div>
        <UsersComponent />
      </div>
    </div>
  );
}
