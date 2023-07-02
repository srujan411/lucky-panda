import React from "react";
import Popup from "reactjs-popup";
import {GoKebabHorizontal} from "react-icons/go"
import "reactjs-popup/dist/index.css";

export default function PopupEdits({ props }) {
  const { clickToEdit,deletePostfromdb,_id } = props;
  const overlayStyle = { background: "rgba(0,0,0,0.5)" };
  const contentStyle = { color: "#fff",backgroundColor:"black", width: "4rem" , fontSize:"13px"};
  const arrowStyle = { color: "#000" };
  return (
    <div>
      <Popup
        trigger={<p><GoKebabHorizontal/> </p>}
        position="bottom center"
        {...{ contentStyle, overlayStyle, arrowStyle }}
      >
        <p onClick={clickToEdit}>Edit</p>
        <p onClick={()=>deletePostfromdb(_id)}>Delete</p>
      </Popup>
    </div>
  );
}
