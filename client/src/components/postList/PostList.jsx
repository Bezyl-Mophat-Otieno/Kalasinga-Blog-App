import React from 'react'
import {List , Datagrid , TextField , DateField , EditButton , DeleteButton} from 'react-admin'

function PostList() {
  return (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="title" />
            <TextField source="status" />
            <TextField source="language" />
            <TextField source="desc" />
            <DateField source="createdAt" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
  )
}

export default PostList