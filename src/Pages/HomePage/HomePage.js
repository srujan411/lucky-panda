import NavLinks from "../../Navbar/NavLinks";
import Nabvar from "../../Navbar/NavRoutes";
import PostsComponent from "../Posts/Posts";
import UsersComponent from "../Users/Users";
import AddnewPost from "../addPosts/AddnewPost";

export default function HomePage() {
  return (
    <div className="homepage container">
      <div>
        <NavLinks />
      </div>
      <div>
        <div>
          <AddnewPost />
        </div>
        <div>
          <PostsComponent />
        </div>
      </div>
      <div>
        <UsersComponent />
      </div>
    </div>
  );
}
