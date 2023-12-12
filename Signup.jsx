import {Button,TextField,Typography} from '@mui/material'
import React from 'react'

export const Signup = () => {
    return (
      <div> 
          <Typography variant='h4'>Hello</Typography><br></br>
          <TextField variant='outlined' label='UserName'/><br></br>
          <TextField variant='outlined' label='Place'/><br></br>
          <TextField variant='outlined' label='Age'/><br></br>
          <TextField variant='outlined' label='Gender'/><br></br>
          <TextField variant='outlined' label='Email'/><br></br>
          <TextField variant='outlined' label='Password'/><br></br>
          <Button>Submit</Button>
      </div>
    )
  }
  export default Signup