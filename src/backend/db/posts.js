import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import img1 from "./Assets/img1.jpg";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: [
      "Skills to pay Bills 😎",
      "https://images.unsplash.com/photo-1517708777192-0ab95e4fc80e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: [
      "Banananaaaaaaaaa!!!!",
    ],
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Stuart",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: [
      "I can bring you in warm, or I can bring you in cold.","https://images.unsplash.com/photo-1683034985442-6475f053de98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    ],
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Mandalorian",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: [
      "Check this out!!",
      "https://images.unsplash.com/photo-1684151093347-2304cda70839?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    ],
    likes: {
      likeCount: 40,
      likedBy: [],
      dislikedBy: [],
    },
    username: "lumine8",
    createdAt: "2023-06-24T12:00:00Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: [
      "I am Groot.",
      "https://images.unsplash.com/photo-1581368976940-534956cab59b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    ],
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "IamGroot",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
