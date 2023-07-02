import { Routes, Route, NavLink, Link } from "react-router-dom";
import Mockman from "mockman-js";

import HomePage from "../Pages/HomePage/HomePage";
import Signin from "../Pages/authPages/Signin";
import Signup from "../Pages/authPages/Signup";
import SingleUsers from "../Pages/SingleUser/SingleUserPage";
import AuthRequired from "../ContextProvider/AuthReq/AuthRequired";
import ProfilePage from "../Pages/Profile/ProfilePage";
import SinglePost from "../Pages/SinglePosts/SinglePost";
import BookMark from "../Pages/BookMarkedPage/BookMarked";
import AddnewPost from "../Pages/addPosts/AddnewPost";
import ExplorePage from "../Pages/Explore/Explore";
import Loader from "../Pages/Loaders/Loader";
import PopupEdits from "../Pages/OtherComponents/PopupEdit";

export default function Navbar() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/"
          element={
            <AuthRequired>
              <HomePage />
            </AuthRequired>
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/saved" element={<BookMark />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users/:userId" element={<SingleUsers />} />
        <Route path="/posts/:postId" element={<SinglePost />} />
        <Route path="/sample" element={<PopupEdits/>}/>
      </Routes>
    </>
  );
}
