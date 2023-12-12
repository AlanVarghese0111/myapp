import React, { useState } from 'react'

function Mapping() {
    
    var [name,setName] = useState(["Cyril","Alan","Tibin","Abhinav"]);
  return (
    <div>
        <ol>
            {name.map((value,index)=>{
                return (
                    <li>{value}</li>
                )
            })}
        </ol>
    </div>
  )
}

export default Mapping