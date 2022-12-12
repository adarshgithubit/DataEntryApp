import React from 'react'
import { useEffect } from 'react'
import { getUser,deleteUser } from '../Service/userApi'
import {Table, TableHead, TableRow,TableCell, TableBody, Button} from '@mui/material'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const AllUser = () => {
 const [users, setUsers]=useState([]);


  useEffect(()=>{
    getAllUser()
  },[]);


const getAllUser = async() =>{
   let response=await getUser()
   setUsers(response.data)
   
}

const deleteUserDetails =async (id)=>{
await deleteUser(id);
getAllUser();
}
  return (
    <>
  <Table>
     <TableHead>
        <TableRow>
        <TableCell>id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>email</TableCell>
        <TableCell>Phone</TableCell>
        </TableRow>
     </TableHead>
     <TableBody>
      {
              users.map(user=>(
                <TableRow>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button variant ="contained" style={{marginRight:10}} component={Link} to ={`/edit/${user._id}`}>Edit</Button>
                    <Button variant ="contained" color='secondary' onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
                  </TableCell>
                </TableRow>

              ))
      }
     </TableBody>
    </Table>
    </>
  )
}

export default AllUser

