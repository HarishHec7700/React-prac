import React from "react";
import { useState } from "react";
import Login from '../Login/Login'
import Mobiles from '../Mobiles'

export default function Prac() {
  const [login,setLogin]=useState(false);
  const loginHandler=(loggedin)=>{
    setLogin(loggedin);
  }

    return (
    <>
    <h1>HI ALL WELCOME TO MY WEBSITE</h1>
        {login?<Mobiles/>:<Login isLogin={loginHandler}/>}        
    </>
    )
}