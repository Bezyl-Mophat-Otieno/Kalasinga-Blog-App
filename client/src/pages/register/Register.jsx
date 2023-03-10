import React from 'react'
import './Register.css'
import AddText from '../../components/add/AddText'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import {Link} from 'react-router-dom'


function Register() {
const [username , setUsername] = useState("")
const [email , setEmail] = useState("")
const [password , setPassword] = useState("")
const [error , setError] = useState(false)

const navigate = useNavigate()

const handleSubmit = async (e) => {
  setError(false)
    e.preventDefault()
    try {
      const res = await axios.post('/api/auth/register',{
        username: username,
        email: email,
        password: password
      })
      res.data && navigate('/login')
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
      <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="registerInput"
         type="text"
         placeholder="Enter your username..." 
         onChange={(e) => setUsername(e.target.value)}

        />
        <label>Email</label>
        <input className="registerInput" 
        type="text" 
        placeholder="Enter your email..." 
        onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..."
         onChange={(e) => setPassword(e.target.value)}

         />
        <button className="registerButton">Register</button>
      </form>
        <Link to="/login" ><button className="registerLoginButton">Login</button></Link>
{    error &&  <span style={{color:"red"}}>Something went wrong!</span>}    </div>
  )
}

export default Register