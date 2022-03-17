//mui
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MicNoneIcon from '@mui/icons-material/MicNone';

//css
import "./Chat.css"


// -------FUNC COMPO EXP DEF-------------
export default function Chat() {

  const [seed, setSeed] = useState("");

  const [msgInp, setMsgInp] = useState("");

  useEffect(() => {
    setSeed(
      Math.floor(Math.random()*2000)
      )
  }, []);

  const sendMessage = (e) => {
    e.preventDefault(); //refresh form fubmit
    setMsgInp("");
  }
  

  //--------------RETURN-------------

  return (
    <div className='chat'>

    {/* chat header -------------- */}
      <div className="chat__header">

        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton><SearchIcon/>
            </IconButton>
          <IconButton><AttachFileIcon/>
            </IconButton>
          <IconButton><MoreVertIcon/>
            </IconButton>
        </div>

      </div>


    {/* chat body--------------------   */}
      <div className="chat__body">

      <p className={`chat__message ${true && "chat__sent"}`}> 
        <span className="chat__name ">omkar</span>
        hi
        <span className="chat__timestamp">5:20</span>
      </p>

      </div>



    {/* chat footer------------------------   */}
      <div className="chat__footer">
        <SentimentSatisfiedAltIcon/>

        <form onSubmit={sendMessage}>
          <input 
            type="text" 
            placeholder='type message' 
            value={msgInp} 
            onChange={(e) => setMsgInp(e.target.value)}/>
        </form>

        <MicNoneIcon/>

      </div>


    </div>
  )
}
