import React, { useState,useRef } from 'react'
import Child_Comp from './Child_Comp';
function Parent_Comp() {
    const [name,setName]=useState({firstName:'',lastName:''});

   
    return (
        <div>
            <div>First Name : {name.firstName}</div>
            <div>Last Name : {name.lastName}</div>
            <Child_Comp setName={setName}/>
        </div>
    )
}

export default Parent_Comp
