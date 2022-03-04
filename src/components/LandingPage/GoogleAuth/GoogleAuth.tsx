import React from 'react'
import { auth, provider } from "../../../firebaseSetup";
import { NavigateFunction, useNavigate } from "react-router-dom"
import firebase from 'firebase/compat/app';


const GoogleAuth = async(navigate: NavigateFunction, setIsLoadingGoogle: React.Dispatch<React.SetStateAction<boolean>>) => {
  const user = firebase.auth().currentUser;  
  await auth.signInWithPopup(provider).then(async () => {
      if (auth.currentUser?.metadata?.creationTime !== auth.currentUser?.metadata?.lastSignInTime)
          {
            navigate('/home');
          }
          else{
            const name = await user?.displayName
            const email = user?.email
            const uid = user?.uid
            const ref = firebase.firestore().collection("person")
            await ref.doc(uid).set({name,email}).catch((err)=>{
                alert(err);
            }) 
            navigate('/welcome')
          }
    }).catch((error) => {
      console.log(error.message)
      setIsLoadingGoogle(false);
    })
}
export default GoogleAuth
