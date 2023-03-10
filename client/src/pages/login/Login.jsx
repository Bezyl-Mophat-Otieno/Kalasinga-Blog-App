import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Context } from '../../context/Context';
import { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post('/api/auth/login', {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
      res.data && dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate('/');
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE"});
    }

  }
  console.log(user);

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." 
        ref={usernameRef}
         />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." 
        ref={passwordRef}
        />
        <button type='submit' className="loginButton" disabled={isFetching} >Login</button>
      </form>
       <Link to='/register'><button className="loginRegisterButton">Register</button></Link>
    </div>  )
}

export default Login