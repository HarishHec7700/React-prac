import React from 'react'
import { useState,useEffect } from 'react'

export default function Login(props) {
    const [uname,setUname]=useState('');
    const[pass,setPass]=useState('');
    const[valid,setValid]=useState(false);
    const unamehandle=(unm)=>{
        console.log(unm.target.value);
        setUname(unm.target.value);
    }
    const passhandle=(pas)=>{
        console.log(pas.target.value);
        setPass(pas.target.value);        
    }
    const subhandle=(eve)=>{
        eve.preventDefault();
        if (uname && pass &&valid){
            props.isLogin(true);
        }
    }
    // useEffect(()=>{
    //     fetch('http//localhost:3000/mobiles').then((response)=>
    //     {
    //         if(response.ok){
    //             return response.json
    //         }
    //         if(response){
    //             props.userLogin(response.isLogin)
    //         }
    //         return false;
    //     })
    // ,[props])
    useEffect(()=>{
        if((uname.includes("@")&&pass.length>6)){
            setValid(true)
        }else{
            setValid(false)
        }
    },[uname,pass])
  return (
    <div className='loginSec'>
        <form onSubmit={subhandle}>
            <fieldset>
                <legend>Personal Info</legend>
                <label htmlFor="user">User Name</label>
                <input type="text" name="user" id="user" placeholder='Enter User Name ' value={uname} onChange={unamehandle} /><br></br>
                <label htmlFor="user">Password</label>
                <input type="password" name="user" id="user" placeholder='Enter Password' value={pass}  onChange={passhandle} />
                {valid?<button className='logButt'>Submit</button>:<button className='logButt' disabled='true' >Submit</button>}
            </fieldset>
        </form>
    </div>
  )
}
