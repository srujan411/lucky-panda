import { useContext, useState } from "react";
import { DataContext } from "../../";
import UserCard from "./userCard";

export default function UsersComponent() {
  const { state } = useContext(DataContext);

  const userData = state.userData.filter(
    (item) => item.username !== state.currentUser.username
  );

  const [userFilter, setUserFilter] = useState("");

  const onChangeInput = (e) => {
    setUserFilter(e.target.value);
  };

  const filteredData = [...userData].filter((item)=>item.username.toLowerCase().includes(userFilter))

  return (
    <div className="userListing">
      <h3 style={{marginLeft:"2rem"}}>Follow Other Users</h3>

      <input
        onChange={(e) => {
          onChangeInput(e);
        }}
        type="text"
        name="text"
        className="input"
        placeholder="Search user here..."
      />
      <ul>
        {filteredData.map((item) => {
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
  );
}
