import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Banner from './my_src/Banner'
import Login from './my_src/Login/Login'
import './my_src/Banner.css'
import React from 'react';
import Mobiles from './my_src/Mobiles'; 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Profile from './Profile';

function App() {
    const[login,setLogin]=useState();
    const loginHandler=(userLogin)=> {
      setLogin(userLogin)
    }
    
    // let cond="";
    // if(cond){
    //   cond=<Mobiles/>
    // }else{
    //   cond=<Login isLogin={loginHandler}/>
    // }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     */}
     <Router>
      <Link to="/mobiles">Mobiles</Link>
      <Link to="/profile">Profile</Link>
      <Routes>
        <Route path='/mobiles' element={<Mobiles/>} />
        <Route path='/profile' element={<Profile/>}/> 
      </Routes>
     </Router>
    {
    !login && <Login isLogin={loginHandler} />
    } 
    {
    login && <Mobiles/>
    }  
    {/* {cond} */}
    </div>
  );
}

export default App;
