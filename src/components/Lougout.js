import React from 'react'

export default function Lougout({setLoggedIn,setUserState}) {

 const handleLogout = () => {
    setLoggedIn(false);
    setUserState({})
    localStorage.removeItem('user'); 
  }

  return (
    <>
    <button onClick={handleLogout}>Lougout</button>
    </>
  )
}
