import React,{useState,useEffect} from 'react';

function MouseMoveHook(){

    const [x_pos ,setXPos] = useState(0);
    const [y_pos ,setYPos] = useState(0);

    const logMouseMoveCoordinates = (event) => {
        console.log('logMouseMoveCoordinates !!!');
        setXPos(event.clientX);
        setYPos(event.clientY);
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMouseMoveCoordinates);
        return (() => {
            console.log('useEffect - return !!! ');
            window.removeEventListener('mousemove', logMouseMoveCoordinates);
        })
    },[])

    return (
<div>
    This is Mousemove using Hook
    <br/>
     X Position : {x_pos} 
     <br/>
     Y Position : {y_pos}
</div>
    )
}

export default MouseMoveHook;