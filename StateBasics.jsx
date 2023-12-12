import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    // var name = "Alan"
    var [fname,setfname] = useState("Alan")
    var [val,setVal] = useState()

    const changeName = ()=>{
        console.log("clicked")
        setfname(val)
        setVal("")
    }

    const InputHandler = (e)=>{
        console.log(e.target.value)
        setVal(e.target.value)
    }
  return (
    <div>
        <Typography>My Name is {fname} </Typography> <br/>
        <TextField variant='outlined' label='Enter Name' onChange={InputHandler} value={val}/> <br/>  <br/>
        <Button variant='contained' onClick={changeName}>Change</Button>
    </div>
  )
}

export default StateBasics