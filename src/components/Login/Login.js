import { Button } from '@mui/material'
import React from 'react'
import { auth, provider } from '../../firebase'
import { actionTypes } from '../../reducer'
import {useStateValue} from '../../StateProvider'
//
import './Login.css'
//

export default function Login() {

  const [{user}, dispatch] = useStateValue();  //holds useContext

  const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then( (result) => {
      dispatch(
        {
          type: actionTypes.SET_USER,
          user: result.user,
        }
      );
    } )
    .catch( err=>alert(err) )
  }

  return (
    <div className='login'>
      <div className="login__container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="logo" />
        <h1>Sign in to WhatsApp</h1>
        <Button onClick={signIn}>Sign in</Button> 
      </div>
    </div>
  )
}
