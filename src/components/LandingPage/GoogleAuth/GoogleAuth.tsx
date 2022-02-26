import React from 'react'
import { auth, provider } from "../../../firebaseSetup";
import { NavigateFunction, useNavigate } from "react-router-dom"


const GoogleAuth = async(navigate: NavigateFunction, setIsLoadingGoogle: React.Dispatch<React.SetStateAction<boolean>>) => {
    auth.signInWithPopup(provider).then(() => {
      if (auth.currentUser?.metadata?.creationTime !== auth.currentUser?.metadata?.lastSignInTime)
          {
            navigate('/home');
          }
          else{
            navigate('/welcome')
          }
    }).catch((error) => {
      console.log(error.message)
      setIsLoadingGoogle(false);
    })
}
export default GoogleAuth
