import {Button,TextField,Typography} from '@mui/material'
import React from 'react'

export const Login = () => {
  return (
    <div> 
        <Typography variant='h4'>Hello</Typography><br></br>
        <TextField variant='outlined' label='UserName'/><br></br><br></br>
        <Button>Submit</Button>
    </div>
  )
}
export default Login