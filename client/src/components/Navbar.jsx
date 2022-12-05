import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material';


const Header=styled(AppBar)`
background: #111111
`

const Tabs = styled('p')`
font-size: 20px;
margin-right:20px;
`
const Navbar = () => {
  return (
    <>
    
        <Header position='static'>
            <Toolbar>
              <Tabs>Home Page</Tabs>
              <Tabs>All User</Tabs>
              <Tabs>Add User Detail</Tabs>
            </Toolbar>
        </Header>
    
    </>
  )
}

export default Navbar