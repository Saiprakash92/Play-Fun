import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Lougout from './components/Lougout'
function App() {
  const[loggedIn,setLoggedIn]=useState(false)
  const [registerd,setRegisterd]=useState(false)
  const [userState,setUserState]=useState({
    userName:"",
    password:""
  })
  console.log(userState)
  return (
    
      <div style={{textAlign: "center"}}>
       
       <Router>
  <Routes>
    <Route path="/Login" element={loggedIn ? <Navigate to="/" /> : <Login  setUserState={setUserState} setLoggedIn={setLoggedIn} />} />
    <Route path="/register" element={registerd?<Navigate to ="/login"/>:<Register setRegisterd={setRegisterd} />} />
    <Route path="/" element={userState&&loggedIn?<Home />:<Navigate to ="/Login"/>} />
    <Route path="/logout" element={<Lougout setUserState={setUserState} setLoggedIn={setLoggedIn}/>} / >
  </Routes>
</Router>

      </div>
   
  );
  
    }
export default App
