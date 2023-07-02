import Modal from "react-modal";
import { DataContext } from "../../";
import { useContext, useState } from "react";

export default function EditProfile() {
  const { state, modalIsOpen, setIsOpen, editUserDetails } =
    useContext(DataContext);
  const [editedData, setEditedData] = useState({
    avatar: state.currentUser.avatar,
    fullName: state.currentUser.fullName,
    bio: state.currentUser.bio,
    website: state.currentUser.website,
  });
  
  const nameChangehandler = (e) => {
    setEditedData({ ...editedData, full_name: e.target.value });
  };
  const avatarChangeHandler = (e) => {
    setEditedData({
      ...editedData,
      avatar: URL.createObjectURL(e.target.files[0]),
    });
  };
  const bioChangeHandler = (e) => {
    setEditedData({ ...editedData, bio: e.target.value });
  };
  const websiteChangeHandler = (e) => {
    setEditedData({ ...editedData, website: e.target.value });
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const saveHandler = () => {
    closeModal();
    editUserDetails(editUserDetails);
  };
  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>close</button>
        <h2>Edit Profile</h2>
        <form>
          <img
            style={{
              minHeight: "10rem",
              maxWidth: "10rem",
              objectFit: "cover",
              borderRadius: "100%",
            }}
            src={editedData.avatar}
            alt={state.currentUser.username}
          />
          <input type="file" onChange={(e) => avatarChangeHandler(e)} />
          <label>Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            onChange={(e) => nameChangehandler(e)}
          />
          <label>Bio</label>
          <input
            type="text"
            placeholder="I am Awesome!!"
            onChange={(e) => bioChangeHandler(e)}
          />
          <label>Website</label>
          <input
            type="url"
            placeholder="https://xyz.com"
            onChange={(e) => websiteChangeHandler(e)}
          />
        </form>
        <button onClick={saveHandler}>Save</button>
      </Modal>
    </div>
  );
}
