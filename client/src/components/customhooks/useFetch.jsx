import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios'
function useFetch(url) {
    const [posts , setPosts] = useState([])
const {search} =useLocation();
useEffect(()=>{
const getPosts = async ()=>{
  const res = await axios.get(url+search)
  console.log(res)
  const data = res.data
  setPosts(data)
}
getPosts()
},[search])
  return (posts)
}

export default useFetch