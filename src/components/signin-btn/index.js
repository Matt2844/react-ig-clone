import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/user';
import { signInWithGoogle } from '../../services/auth'
import "./style.css"

export default function SignInBtn () {
  const [user, setUser] = useContext(UserContext).user

  const signInBtnClick = async () => {
    let userBySignIn = await signInWithGoogle();
    if (userBySignIn) setUser(userBySignIn);
  };

  return (
    <div className="sign-in-btn">
      <button onClick={signInBtnClick}>Sign In With Google</button>
    </div>
  )
}