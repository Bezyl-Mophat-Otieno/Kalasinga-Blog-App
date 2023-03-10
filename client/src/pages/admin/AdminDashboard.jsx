import React from 'react'
import {Admin , Resource} from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import PostList from '../../components/postList/PostList' 
function AdminDashboard() {
  return (
<Admin  dataProvider={simpleRestProvider('http://localhost:5000')}>
  <Resource name='posts' list={PostList}/>
</Admin>
  )
}

export default AdminDashboard