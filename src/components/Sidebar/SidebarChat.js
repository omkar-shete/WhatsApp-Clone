import React, { useEffect, useState } from 'react'
//
import './SidebarChat.css'
//mui
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@material-ui/core';



//----------EXPORT DEF FN COMPO___________
export default function Sidebarchat( {addNewChat} ) {
  
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(
      Math.floor(Math.random()*2000)
      )
  }, []);


  const createNewChat =()=>{
    const roomName = prompt("Enter the name for new chat room");
    if (roomName) {
      
    }
  }
  

  //----------------RETURN----------------
  return !addNewChat ?  //cond rend

  (
    <div className='sidebarchat'>
      {/* <AccountCircleIcon sx={{ fontSize: 48 }}/> */}
      <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
      <div className='sidebarchat__info'>
        <h2>Room Name</h2>
        <p>last msg...</p>
      </div>
    </div>
  )

  : 
  <div className='sidebarchat' onClick={createNewChat}>
    <h2>Add new chat</h2>
  </div>
  
}
