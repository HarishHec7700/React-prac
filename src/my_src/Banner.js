import React from 'react'
import Karticn from './Images/dipkart-logo.png'
// import F3gt from './Images/f3gt.jpg'
// import Magic5 from './Images/magic5.png'
// import P50 from './Images/huawei-P50.jpg'
import './Banner.css'
import Mobili from './Mobiles'
export default function Banner() {
  return (
    <section className='dipkart'>
      <section className='header'>
        <div className='container'>
          <div className='head-flex d-flex'>
            <div className='kart-logo'>
              <img src={Karticn} alt="maagic5"></img>
              <input className='search' placeholder='Search for Brands,Products and more..'></input>
              <button className='search-butt'>Search</button>
            </div>
          </div>
        </div>
      </section>
      <section className='back-page'>
        <div className='container'>
          <div className='search-res'>
            <div className='res-title'>
              <h1>Showing resuls of Mobile Phones</h1>
              <p>Here are the search results of mobile phone from best brands</p>
            </div>
            <div className='res-mobiles d-flex'>
              <div className='res-mobile'>
                <Mobili>  </Mobili>
              </div>
            </div>
          </div>
        </div>  
      </section>
      {/* <Mobili>  </Mobili> */}
    </section>
  )
}
