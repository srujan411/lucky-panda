import axios from "axios";
import { useContext, useState } from "react";
import { DataContext } from "../../";
import { ToastContainer, toast } from 'react-toastify';
import {FiUpload} from "react-icons/fi"

export default function AddnewPost() {
  const { createPost } = useContext(DataContext);
  const [postCreated, setPostCreated] = useState({ content: "" });
  const textHandler = (e) => {
    setPostCreated({ content: [e.target.value] });
  };
  const buttonClick = () => {
    createPost(postCreated);
    setPostCreated({content:""})
  };

  const filehandler = (e) =>{
    setPostCreated({ content: [...postCreated.content, URL.createObjectURL(e.target.files[0])] })
  }

  return (
    <div>
      <div>
        <textarea
          className="textarea"
          type="text"
          onChange={(e) => {
            textHandler(e);
          }}
        />
        <label for="file-upload"><FiUpload size={20} style={{cursor:"pointer", marginRight:"2rem", paddingTop:"10px"}}/></label>
        <input type="file" id="file-upload" onChange={(e)=>filehandler(e)} style={{display:"none", }}/>
        <button onClick={buttonClick} style={{border:"none", backgroundColor:"black", color:"white", fontSize:"17px", cursor:"pointer"}}>Post</button>
      </div>
      <div></div>
      <ToastContainer/>
    </div>
  );
}
