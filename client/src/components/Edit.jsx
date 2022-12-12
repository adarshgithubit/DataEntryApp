import { FormControl, FormGroup, InputLabel,Input, Typography, styled,Button  } from '@mui/material'
import React from 'react'
import { useState, useEffect, } from 'react'
import { editUser,takeUser } from '../Service/userApi'
import {useNavigate, useParams} from "react-router-dom";

const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&>div{
  margin-top: 20px;
}

`
const defaultValue={
   name:"",
   username:"",
   email:"",
   phone:"",
}
const EditUser = () => {

   const [user, setUser] = useState(defaultValue);

   const navigate = useNavigate();

   const onValueChange =(e)=>{
      
      setUser({...user, [e.target.name]: e.target.value})
      console.log(user);
      
   }

   const  EditUserDetail= async()=>{
     await editUser(user, id);
     navigate('/all');
   }

   const {id} = useParams();
   useEffect(()=>{
     loadUserDetails();
   },[]);

   const loadUserDetails = async()=>{
    const response = await takeUser(id)
    setUser(response.data);
   }
  return (
   <>
   
   <Container>
   <Typography variant="h3">Edit User</Typography>
      <FormControl>
        <InputLabel> Name </InputLabel>
           <Input onChange={(e)=> onValueChange(e)} name="name" value={user.name} />
       </FormControl>
       <FormControl>
        <InputLabel> Username </InputLabel>
           <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username} />
       </FormControl>
       <FormControl>
        <InputLabel> Email </InputLabel>
           <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email} />
       </FormControl>
       <FormControl>
        <InputLabel> Phone </InputLabel>
           <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
       </FormControl>
       <FormControl>
          <Button variant="contained" onClick={()=>EditUserDetail()}>Edit User</Button>
       </FormControl>
   </Container>
   </>
  )
}

export default EditUser