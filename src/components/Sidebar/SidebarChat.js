import React, { useEffect, useState } from 'react'
//
import './SidebarChat.css'
//mui
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@material-ui/core';
import db from '../../firebase';
import { Link } from 'react-router-dom';



//----------EXPORT DEF FN COMPO___________
export default function Sidebarchat( {addNewChat, id, roomName} ) {

  // const[{user}, dispatch] = useStateValue(); //global data
  
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if(id){
      //url manipulation
      setSeed(id);
      //get last msg
      db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(
        snap=>{ setMessages(snap.docs.map( doc=>doc.data()))}
      )
    }
  }, [id]);
  

  const createNewChat =()=>{
    const newRoomName = prompt("Enter the name for new chat room");
    if (newRoomName) {
      db.collection('rooms').add(
        {
          roomName: newRoomName,
        }
      );
    }
  }
  

  //----------------RETURN----------------
  return !addNewChat ?  //cond rend: if addNewChat is not present as prop, render compo; otherwise div

  ( 
    <Link to={`/rooms/${id}`}>
      <div className='sidebarchat'>

        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
        <div className='sidebarchat__info'>
          <h2>{roomName}</h2>
          <p>{messages[0]?.message}</p>
        </div>

      </div>
    </Link>
  )

  : 
  <div className='sidebarchat' onClick={createNewChat}>
    <h2>Add new chat</h2>
  </div>
  
}
