
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <div>
           
            
            <AppBar>
                <Toolbar>
                    <Typography>MY App</Typography>
                    <Button varient='contained' color='error'>Home</Button>
                    <Button varient='contained' color='error'>Log In</Button>
                </Toolbar>
            </AppBar>
        </div>

    )
}
export default Navbar