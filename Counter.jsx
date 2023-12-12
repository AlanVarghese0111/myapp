import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const[Count,setCount]=useState(0);
    const inc=() =>{
        setCount(Count + 1);
    }
    const dec=()=>{
        if (Count>0){
            setCount(Count - 1);
        }
    }
        
  return (
    <div>
        <Typography>count:{Count}</Typography>
        <Button variant='contained' color='success' onClick={inc}>+</Button>&nbsp;&nbsp;
        <Button variant='contained' color='error'onClick={dec}>-</Button>
    </div>
  )
}

export default Counter