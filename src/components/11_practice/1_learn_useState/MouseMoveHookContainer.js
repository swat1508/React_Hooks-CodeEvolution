import React,{useState,useEffect} from 'react';
import MouseMoveHook from './MouseMoveHook';


function MouseMoveHookContainer(){
    const [show,setShow] = useState(true);

    const toggleShow = () => {
        console.log('toggleShow !!!! ');
        setShow(!show);
    }

    return(
        <div>
            <button onClick={toggleShow} >Toggle Show </button>
            {
                show ?  <MouseMoveHook />  : null
            }
           
        </div>
    )
}

export default MouseMoveHookContainer;