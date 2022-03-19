import "./Sidebar.css"

//mui
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
// import InputUnstyled from '@mui/base/InputUnstyled';
// import { styled } from '@mui/system';
import { Avatar, IconButton, Input, OutlinedInput, TextField } from "@material-ui/core";


//
import React, { useEffect, useState } from 'react'
import Sidebarchat from "./SidebarChat";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";
//




// ------------EXPORT DEF COMPO FN------------
export default function Sidebar() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const unsubscribe = 
    db.collection('rooms').onSnapshot( snap => (
      setRooms( snap.docs.map( doc=> (             //return array of objects 
        {
          id: doc.id,
          data: doc.data() 
        })
      ))
    ));

    return () => {unsubscribe()}; //run this thing when comp unmounts..here, run the same thing
  }, []);
  


  //getting user from global state storage
  const [{user}, dispatch] = useStateValue();




  //--------------------RETURN-----------------
  return (
    <div className="sidebar">

    {/* 1.sidebar header ----------- */}
      <div className="sidebar__header">

        {/* <AccountCircleIcon sx={{ fontSize: 48 }}/> */}
        <Avatar src={user?.photoURL}/>   
        {/* user.photoURL  ..'?' means if present */}

        <div className="sidebar__headerRight">
          <IconButton> <DonutLargeIcon/>
            </IconButton>
          <IconButton>  <ChatIcon/>
            </IconButton>
          <IconButton>  <MoreVertIcon/>
            </IconButton>
        </div>

      </div>


    {/* 2.search ---------- */}
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon/>
          <input placeholder="search chats" type="text" />
          {/* <OutlinedInput placeholder="search chats"/> */}
          {/* <InputUnstyled placeholder="search chats" components={{ Input: StyledInputElement }}/> */}
          {/* <TextField placeholder="search chats" id="outlined-basic" variant="outlined" /> */}
          {/* <Input placeholder="search chats" type="text"/>           */}
        </div>
      </div>


    {/* 3.chats ------------ */}
      <div className="sidebar__chats">
        <Sidebarchat addNewChat/>

        { rooms.map((room) => (
          <Sidebarchat key={room.id} id={room.id} roomName={room.data.roomName}/>
        ) ) }
        
      </div>

    </div>
  )
}
