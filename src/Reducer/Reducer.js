export const INITIAL_STATE = {
  isLoggedin: false,
  loading:false,
  userData: [],
  postData: [],
  currentUser: {
    // avatar:
    //   "https://images.unsplash.com/photo-1682018667453-b8d127e055b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    // bookmarks: [],
    // createdAt: "2023-06-21T01:27:33+05:30",
    // fullName: "Adarsh",
    // followers: [],
    // following: [],
    // lastName: "Balika",
    // password: "adarshBalika123",
    // updatedAt: "2023-06-21T01:27:33+05:30",
    // username: "adarshbalika",
    // _id: "63de2df7-ee5b-4679-a68b-c6370608d638",
  },
  postById: {
    id: "",
    content: [""],
    username: "",
    avatar: "",
    likes: [],
    createdAt: "",
  },
  bookMarkedData: [],
};

const DataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "USER_LOGGED_IN":
      return {
        ...state,
        isLoggedin: payload,
      };

    case "IS_LOADING":
      return{
        ...state,
        loading:payload
      }

    case "GET_USER_DATA":
      return {
        ...state,
        userData: payload,
      };

    case "GET_BOOKMARK_DATA":
      return {
        ...state,
        bookMarkedData: payload,
      };

    case "GET_POST_DATA":
      return {
        ...state,
        postData: payload?.posts,
      };

    case "GET_POST_BY_ID":
      return {
        ...state,
        postById: payload?.post,
      };

    case "GET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};

export default DataReducer;
