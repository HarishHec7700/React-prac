import React from 'react'
import {useNavigate} from 'react-router-dom'

function Profile() {
    let navi=useNavigate();
  return (
    <div>
        <h1>
        This is Profile Page 
        </h1>
        <button onClick={()=>{
            navi('/mobiles');
        }}>Mobiles</button>
        </div>
  )
}

export default Profile