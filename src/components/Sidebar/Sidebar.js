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
import React from 'react'
import Sidebarchat from "./SidebarChat";
//

//mui input styling
// const StyledInputElement = styled('input')(
//   () => `
//   border: none;
//   margin-left: 10px;
//   &:focus{border: none;}`
// )


// ------------EXPORT DEF COMPO FN------------
export default function Sidebar() {

  return (
    <div className="sidebar">

    {/* 1.sidebar header ----------- */}
      <div className="sidebar__header">

        {/* <AccountCircleIcon sx={{ fontSize: 48 }}/> */}
        <Avatar/>

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
        <Sidebarchat />
      </div>

    </div>
  )
}
