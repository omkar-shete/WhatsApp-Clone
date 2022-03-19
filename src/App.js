// BEM__naming--conv 
import './App.css';
//
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import { useState } from 'react';
import {useStateValue} from './StateProvider'



//---------------FUNC COMP--------------------
function App() {
  
  const[{user}, dispatch] = useStateValue();

//--------------RETURN-----------------
  return (
     <div className="app">
      
      {!user ? 
        <Login/>
      : 

        <div className='app__body'>
          <Sidebar/>          
          <Routes>
            <Route path='/rooms/:roomId' element={<Chat/>} />
          </Routes>
        </div>      
      }
      
    </div>
  );
}

export default App;
