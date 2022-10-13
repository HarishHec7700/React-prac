import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import './my_src/Banner.css'
import reportWebVitals from './reportWebVitals';
import Karticn from "./my_src/Images/dipkart-logo.png";
// import Banner from './my_src/Banner'
// import App from './App';
import Prac from './my_src/Practise/Prac'
// import Login from './my_src/Login/Login'
import Classcomp from './my_src/class_comp/Classcomp';
import './my_src/Banner.css'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
      <main className='content'>
        <div className='container'>
          <div className='login-cont'>
            <App/>
          </div>
        </div>
      </main>
    </section>
    {/* <App /> */}
    {/* <Login/> */}
    {/* <Banner></Banner> */}
    {/* <App/> */}
    {/* <Prac/> */}
    {/* <Classcomp /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
