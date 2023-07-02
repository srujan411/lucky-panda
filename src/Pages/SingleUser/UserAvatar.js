import { useState } from "react";
import Modal from 'react-modal';
import {PiUserCircleLight} from "react-icons/pi"

export default function UserAvatar({props}) {
const {avatarHandler} = props
  const [modalIsOpen, setModalisOpen] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:"25px"
    },
  };
  
  const selectImg = (img) =>{
    avatarHandler(img)
    closeModal()
  }
  const closeModal = () => {
    setModalisOpen(false);
  };
  const openModal = () => {
    setModalisOpen(true);
  };
  const avatars = [
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg?w=740&t=st=1688281406~exp=1688282006~hmac=35c02bd2745c95ab62f93a72314536257a36a78b9f1d6482bf2688ad58131c59",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-punk-hair-jacket_23-2149436198.jpg?w=740&t=st=1688281419~exp=1688282019~hmac=8177b3ce6739bc5aac5861db70318dcb7886552a39f0768d4326ee4cb440a1b8",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg?w=740&t=st=1688281425~exp=1688282025~hmac=4ea368f0745a2f69c0af59b604e4faa042c31395b06895eddf2a08fe53d1ef85",
    "https://img.freepik.com/free-psd/3d-illustration-person-with-rainbow-sunglasses_23-2149436181.jpg?w=740&t=st=1688312564~exp=1688313164~hmac=6d811664e4de58340e4352846cf185326f951d0a299e258f58e8d44dd97c6dcf",
    "https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?size=626&ext=jpg&ga=GA1.2.2036241176.1686928482",
    "https://img.freepik.com/premium-psd/3d-illustration-person-with-purple-hair-glasses_23-2149436204.jpg?size=626&ext=jpg&ga=GA1.2.2036241176.1686928482"
  ];
  return (
    <div>
      <button style={{marginBottom:"-2rem"}} onClick={openModal}><PiUserCircleLight size={80}/><p>Select avatar</p></button>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
         {avatars.map((item)=>(<img onClick={()=>selectImg(item)} className="userProfileAvatar" style={{width:"100px",height:"1000px", borderRadius:"100%", cursor:"pointer", margin:"10px"}} src={item} alt="avatar"/>))}
        </form>
      </Modal>
    </div>
  );
}
