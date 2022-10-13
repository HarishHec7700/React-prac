import React from 'react'

export default function Mobsect(props) {
  return (
  //   <div className='mob-sec d-flex'>
  //       <h2>{props.names}</h2>
  //       {props.post ? <p>{props.post}</p>:<p>No Post</p>}
  //   </div>
    <div >
      <h1>{props.names.head}</h1>
      <img src={props.names.img} alt="mobile pics"></img>
      <p>{props.names.des}</p>
      
      <h3>Price: {props.names.price} rs</h3>
    </div>
  )

}

