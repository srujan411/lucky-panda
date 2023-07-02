import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullName: "Adarsh Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    avatar:
      "https://images.unsplash.com/photo-1548366565-6bbab241282d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "hehe this is cool!",
    website: "https://adarshbalika.netlify.app/",
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    fullName: "Sankar Gopan",
    username: "lumine8",
    password: "password123",
    avatar:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "none for now",
    website: "https://github.com/Lumine8",
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    fullName: "I am Groot",
    username: "IamGroot",
    password: "IamGroot",
    avatar:
      "https://images.unsplash.com/photo-1580923368248-877f237696cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3Jvb3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "I am Groot.",
    website: "https://www.marvel.com/characters/groot",
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    fullName: "Din Djarin",
    username: "Mandalorian",
    password: "password123",
    avatar:
      "https://images.unsplash.com/photo-1608889453743-bf8eabeb12fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "“You understand this!?” *FLAMETHROWER",
    website: "https://www.starwars.com/series/the-mandalorian",
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    fullName: "Stuart Minion",
    username: "Stuart",
    password: "password123",
    avatar:
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Bananaaaaaaa!",
    website: "https://justinjackson.ca/words.html",
    followers: [],
    following: [],
  },
];
