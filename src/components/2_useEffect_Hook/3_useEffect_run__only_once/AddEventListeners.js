import React, { useState, useEffect } from 'react'

function AddEventListeners() {

    const [x_pos,setXPosition] =  useState(0);
    const [y_pos,setYPosition] =  useState(0);

useEffect(()=>{
 console.log('useEffect called');
 window.addEventListener('mousemove',logMousePosition);   

        //folder 4- 4_useEffect_with_cleanup starts(read Readme.md of folder 4-4_useEffect_with_cleanup)
        return () => {
            console.log('component unmounting code !!!');
            window.removeEventListener('mousemove',logMousePosition);
        }
        //folder 4- 4_useEffect_with_cleanup ends

},[])

const logMousePosition = (event) => {
    console.log('logMousePosition!!!');
    setXPosition(event.clientX);
    setYPosition(event.clientY);
}
    return (
        <div>
    <h1>Mouse Position =>  X Co-ordinate : {x_pos} and Y Co-ordinate {y_pos} </h1>        
        </div>
    )
}

export default AddEventListeners
