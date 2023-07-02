import axios from "axios";
import { v4 as uuid } from "uuid";
import { createContext, useEffect, useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DataReducer, { INITIAL_STATE } from "../Reducer/Reducer";
import img from "../Assets/27470372_7309700-removebg-preview.png";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useReducer(DataReducer, INITIAL_STATE);
  const [userDetails, setUserDetails] = useState([
    {
      _id: uuid(),
      fullName: "",
      username: "",
      followers: [],
      following: [],
      avatar: img,
    },
  ]);

  const [postById, setPostById] = useState([
    {
      _id: "123",
      content: ["loading"],
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      username: "none",
      createdAt: "August 19, 1975 23:15:30",
      updatedAt: "formatDate()",
    },
    { avatar: "" },
  ]);

  const postedSuccess = () => {
    toast("✔ Posted Successfully !", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "toast-notification",
      autoClose: 2500,
    });
  };

  const editPost = async (post) => {
    const { id } = post;
    const encodedToken = JSON.parse(
      localStorage.getItem("loginDetails")
    ).encodedToken;
    try {
      const response = await axios.post(
        `/api/posts/edit/${id}`,
        {
          postData: { content: post.content },
        },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 200 || response.status === 201) {
        console.log(response);
        dispatch({
          type: "GET_POST_DATA",
          payload: response?.data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deletePostfromdb = async (id) => {
    
    const encodedToken = JSON.parse(
      localStorage.getItem("loginDetails")
    ).encodedToken;
    try {
      const response = await axios.delete(
        `/api/posts/${id}`,
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "GET_POST_DATA",
          payload: response?.data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const createPost = async (post) => {
    const encodedToken = JSON.parse(
      localStorage.getItem("loginDetails")
    ).encodedToken;
    try {
      const response = await axios.post(
        "/api/posts",
        {
          postData: post,
        },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "GET_POST_DATA",
          payload: response?.data,
        });
        postedSuccess();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getSingleUser = async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      if (response.status === 200 || response.status === 201) {
        setUserDetails(response.data.user);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getUserData = async (apiRoute) => {
    try {
      const response = await axios.get(apiRoute);
      if (response?.status === 200 || response?.status === 201) {
        dispatch({
          type: "GET_USER_DATA",
          payload: response?.data?.users,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getPostData = async (apiRoute) => {
    try {
      const response = await axios.get(apiRoute);
      if (response?.status === 200 || response.status === 201) {
        dispatch({
          type: "GET_POST_DATA",
          payload: response?.data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getCurrentUser = () => {
    const currentUser = JSON.parse(
      localStorage.getItem("loginDetails")
    ).currentUser;
    dispatch({
      type: "GET_CURRENT_USER",
      payload: currentUser,
    });
    const encodedToken = JSON.parse(
      localStorage.getItem("loginDetails")
    ).encodedToken;
    getBookMarkedData(encodedToken);
  };

  const getBookMarkedData = async (encodedToken) => {
    try {
      const response = await axios.get("/api/users/bookmark", {
        headers: { authorization: encodedToken },
      });
      if (response?.status === 200 || response?.status === 201) {
        dispatch({
          type: "GET_BOOKMARK_DATA",
          payload: response?.data?.bookmarks,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const editUserDetails = async (userData) => {
    const encodedToken = JSON.parse(
      localStorage.getItem("loginDetails")
    ).encodedToken;
    try {
      const response = await axios.post(
        "/api/users/edit",
        { userData },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 200 || response.status === 201) {
        localStorage.removeItem("loginDetails");
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ encodedToken, currentUser: response?.data?.user })
        );
        dispatch({
          type: "GET_CURRENT_USER",
          payload: response?.data?.user,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getSinglePostData = async (postId) => {
    dispatch({
      type: "IS_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(`/api/posts/${postId}`);
      if (response.status === 200 || response.status === 201) {
        setPostById([
          response?.data?.post,
          {
            avatar: state.userData.filter(
              (item) => item.username === response?.data?.post?.username
            )[0].avatar,
          },
        ]);
        dispatch({ type: "IS_LOADING", payload: false });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const likePost = async (postId) => {
    const encodedToken = JSON.parse(
      localStorage.getItem("loginDetails")
    ).encodedToken;
    try {
      const response = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      if (response?.status === 200 || response?.status === 201) {
        dispatch({
          type: "GET_POST_DATA",
          payload: response?.data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const dislikePost = async (postId) => {
    const encodedToken = JSON.parse(
      localStorage.getItem("loginDetails")
    ).encodedToken;
    try {
      const response = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      if (response?.status === 200 || response?.status === 201) {
        dispatch({
          type: "GET_POST_DATA",
          payload: response?.data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const bookmarkPosts = async (postId) => {
    const encodedToken = JSON.parse(
      localStorage.getItem("loginDetails")
    ).encodedToken;
    try {
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      if (response?.status === 200 || response?.status === 201) {
        dispatch({
          type: "GET_BOOKMARK_DATA",
          payload: response?.data?.bookmarks,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  const removeBookmarkedPost = async (postId) => {
    const encodedToken = JSON.parse(
      localStorage.getItem("loginDetails")
    ).encodedToken;
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      if (response?.status === 200 || response?.status === 201) {
        dispatch({
          type: "GET_BOOKMARK_DATA",
          payload: response?.data?.bookmarks,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const followUser = async (followUserId) => {
    const encodedToken = JSON.parse(
      localStorage.getItem("loginDetails")
    ).encodedToken;
    try {
      const response = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      if (response?.status === 200 || response?.status === 201) {
        dispatch({
          type: "GET_CURRENT_USER",
          payload: response?.data?.user,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  const unFollowUser = async (followUserId) => {
    const encodedToken = JSON.parse(
      localStorage.getItem("loginDetails")
    ).encodedToken;
    try {
      const response = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      if (response?.status === 200 || response?.status === 201) {
        dispatch({
          type: "GET_CURRENT_USER",
          payload: response?.data?.user,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserData("/api/users");
    getPostData("/api/posts");
  }, []);
  return (
    <DataContext.Provider
      value={{
        state,
        bookmarkPosts,
        removeBookmarkedPost,
        getSingleUser,
        userDetails,
        getCurrentUser,
        editUserDetails,
        modalIsOpen,
        setIsOpen,
        getSinglePostData,
        postById,
        likePost,
        dislikePost,
        createPost,
        followUser,
        editPost,
        unFollowUser,
        deletePostfromdb
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
