import { useContext, useState } from "react";
import Modal from "react-modal";
import { BiComment } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import {GrFormClose} from "react-icons/gr"

import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { DataContext } from "../../";
import PopupEdits from "../OtherComponents/PopupEdit";

export default function PostCards({ props }) {
  const {
    userDetails,
    editPost,
    getSinglePostData,
    likePost,
    dislikePost,
    bookmarkPosts,
    removeBookmarkedPost,
    deletePostfromdb,
    state,
  } = useContext(DataContext);

  const { _id, username, avatar, content, createdAt, likes } = props;

  const time = new Date(createdAt).toUTCString();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [liked, setLiked] = useState(
    likes.likedBy.filter((item) => item.username === state.currentUser.username)
      .length === 1
  );
  const [bookmarked, setBookmarked] = useState(
    state?.bookMarkedData?.filter((item) => item._id === _id).length === 1
  );

  const userContent = content;
  const [editContent, setEditContent] = useState({
    id: _id,
    content: [...userContent],
  });

  const bookmarkButton = (postId) => {
    if (
      state?.bookMarkedData?.filter((item) => item._id === _id).length === 1
    ) {
      setBookmarked(!bookmarked);
      removeBookmarkedPost(postId);
    } else {
      setBookmarked(!bookmarked);
      bookmarkPosts(postId);
    }
  };

  const editText = (e) => {
    setEditContent({
      ...editContent,
      content: [
        e.target.value,
        userContent.filter((item) => isValidUrl(item))[0],
      ],
    });
  };

  const editFile = (e) => {
    setEditContent({
      ...editContent,
      content: [
        editContent.content.filter((item) => !isValidUrl(item))[0],
        URL.createObjectURL(e.target.files[0]),
      ],
    });
  };

  const clickToEdit = () => {
    openModal();
  };

  const editedAndSaved = () => {
    closeModal();
    editPost(editContent);
  };

  const likedButton = (postId) => {
    if (
      likes.likedBy.filter(
        (item) => item.username === state.currentUser.username
      ).length === 1
    ) {
      setLiked(!liked);
      dislikePost(postId);
    } else {
      setLiked(!liked);
      likePost(postId);
    }
  };

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }

  const customStyles = {
    content: {
      backgroundColor: "black",
      color: "white",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: "1rem 5rem",
      transform: "translate(-50%, -50%)",
      borderRadius: "25px",
    },
  };

  return (
    <div className="post">
      <div style={{ paddingTop: "20px" }} className="userCard">
        <img src={avatar} alt={username} className="avatar" />
      </div>
      <div
        className="username"
        style={{ textAlign: "left", paddingLeft: "3.5rem" }}
      >
        <p style={{ marginTop: "-5px" }}>
          @{username} <span style={{ fontSize: "14px", color: "grey" }}>•</span>{" "}
          <span style={{ fontSize: "14px", color: "grey" }}>
            {time.slice(0, 17)}
          </span>
          <span style={{ float: "right", marginRight: "1rem" }}>
            {" "}
            {state.currentUser.username === username ? (
              <PopupEdits props={{ clickToEdit, deletePostfromdb, _id }} />
            ) : (
              ""
            )}
          </span>
        </p>
      </div>
      <div className="content">
        <Link
          to={`/posts/${_id}`}
          style={{ textDecoration: "none", color: "white" }}
          onClick={() => {
            getSinglePostData(_id);
          }}
        >
          <div>
            {content &&
              content
                ?.filter((item) => item === item)
                .map((item) => {
                  if (isValidUrl(item)) {
                    return <img className="postImg" src={item} alt="img" />;
                  }
                  return <p>{item}</p>;
                })}
          </div>
        </Link>
      </div>
      <div style={{ textAlign: "left", padding: "5px 8px 0px 12px" }}>
        {likes?.likedBy?.filter(
          (item) => item.username === state.currentUser.username
        ).length === 0 ? (
          <AiOutlineHeart
            className="icons"
            onClick={() => likedButton(_id)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <FcLike
            className="icons"
            onClick={() => likedButton(_id)}
            style={{ cursor: "pointer" }}
          />
        )}{" "}
        <BiComment className="icons" style={{ cursor: "pointer" }} />{" "}
        {state?.bookMarkedData?.filter((item) => item._id === _id).length !==
        1 ? (
          <BsBookmark
            onClick={() => bookmarkButton(_id)}
            className="icons"
            style={{ float: "right", cursor: "pointer" }}
          />
        ) : (
          <BsBookmarkCheckFill
            onClick={() => bookmarkButton(_id)}
            className="icons"
            style={{ float: "right", cursor: "pointer" }}
          />
        )}
        {likes?.likeCount !== 0 ? (
          <div>
            <p style={{ fontSize: "14px" }}>{likes.likeCount} likes</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <hr
        style={{
          color: "grey",
          border: "0.2px solid darkgrey",
          opacity: "0.5",
          width: "97%",
        }}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button
          onClick={closeModal}
          style={{
            color: "white",
            backgroundColor: "black",
            border: "none",
            cursor: "pointer",
            padding: "10px 0",
          }}
        >
         close
        </button>
        <div>Edit Post</div>
        <form>
          <img />
          <textarea type="text" onChange={(e) => editText(e)} />
          <br />
          <label for="file-upload">
            <FiUpload />
            <input
              type="file"
              id="file-upload"
              onChange={(e) => editFile(e)}
              style={{ display: "none" }}
            />
          </label>
        </form>
        <button
          style={{
            color: "white",
            backgroundColor: "black",
            border: "none",
            cursor: "pointer",
            padding: "10px 0",
          }}
          onClick={editedAndSaved}
        >
          Save
        </button>
      </Modal>
    </div>
  );
}
