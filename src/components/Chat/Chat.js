import firebase from 'firebase/compat/app';

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
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';


// -------FUNC COMPO EXP DEF-------------
export default function Chat() {

  const [{user}, dispatch] = useStateValue(); //global state

  const {roomId} = useParams();

  const [seed, setSeed] = useState("");  //for emoji
  const [msgInp, setMsgInp] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]); //array of obj havng msg info


  useEffect(() => {
    if(roomId){
      //get room name
      db.collection('rooms').doc(roomId).onSnapshot( snap=>{
        setRoomName( snap.data().roomName);
      } )
      
      //get messages data like name msg time inside array of obj
      db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot(
        snap => (setMessages (snap.docs.map( doc=>doc.data() ))))
        // snap => {let m = snap.docs.map( doc=>doc.data() );
        //   setMessages(m);
        //   console.log(m);}
      // )
    };

    return ()=>{setRoomName(''); setMessages([]);}
  }, [roomId])
  
  

  useEffect(() => {
    setSeed(roomId);
  }, [roomId]);


  const sendMessage = (e) => {
    e.preventDefault(); //refresh form fubmit
    db.collection('rooms').doc(roomId).collection('messages').add(
      {
        message: msgInp,
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
    )
    setMsgInp("");
  }


  

  //--------------RETURN-------------

  return (
    <div className='chat'>

    {/* chat header -------------- */}
      <div className="chat__header">

        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>

        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at {new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}</p>
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
        {messages.map( (msg)=>
          (
            <p className={`chat__message ${msg.name===user.displayName && "chat__sent"}`} key={msg.timestamp}> 
              <span className="chat__name ">{msg.name}</span>
              {msg.message}
              <span className="chat__timestamp">{new Date (msg.timestamp?.toDate()).toUTCString()}</span>
            </p>
          )
        )}

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
