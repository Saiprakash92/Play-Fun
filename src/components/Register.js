import {React , useState } from 'react'
import '../styles/Login.css'
function Register({setRegisterd}) {
  const[user,setUser]=useState({
    name:"",
    password:"",
    Cpassword:""
});

const handleChange=(e)=>{
    const {name,value}=e.target
    setUser({
        ...user,
        [name]:value
    })  
}
const handleRegister=(e)=>{
    e.preventDefault()
    localStorage.setItem('user',JSON.stringify(user))
    setRegisterd(true)
}
return (
<div className='container'>
 <div className='login'>
<input className='input'  type='text' name="name" placeholder='UserName' onChange={handleChange}/><br/>
<input className='input'  type='password'name="password" placeholder='Password' onChange={handleChange} /><br/>
<input className='input'  type='password'name="Cpassword" placeholder=' ConfirmPassword' onChange={handleChange} /><br/>
<button className='my-element' onClick={handleRegister}>Regiter</button>
</div>
</div>
)
}
export  default Register 