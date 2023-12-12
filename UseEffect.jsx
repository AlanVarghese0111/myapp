import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseEffect = () =>{
 
    var [name,setName] = useState()

    const changeHname = () => {
        setName("Home")
    }
    const changeCname = () => {
        setName("Contact")
    }
    const changeGname = () => {
        setName("Gallery")
    }
    useEffect(()=>{changeHname()},[])
  return (
    <div>
        <Typography>Welcome To {name}</Typography><br></br>
        <Button variant='contained' onClick={changeHname}>Home</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='contained' onClick={changeCname}>Contact</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='contained' onClick={changeGname}>Gallery</Button>
    </div>
  )
}

export default UseEffect