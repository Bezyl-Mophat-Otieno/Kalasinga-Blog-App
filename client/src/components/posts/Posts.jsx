import React, { useEffect } from 'react'
import './Posts.css'
import Post from '../post/Post'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import useFetch from '../customhooks/useFetch'
function Posts() {
 const posts = useFetch('http://localhost:5000/api/posts')
  return (
    <div className="posts">
      {
        posts.map((post)=>{
       return <Link className='link' to={`/singlepost/${post._id}`} key={post._id}>< Post singlePost={post} /></Link>
})
        

      }
    </div>)
}

export default Posts