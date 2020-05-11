import React,{useState,useEffect} from 'react'
import useDocumentTitle_CustomHook from './useDocumentTitle_CustomHook';

function Counter_One() {
    const [counterOne,setCounterOne] = useState(0);
/*
    useEffect(() => {
        document.title= `Count : ${counterOne}`;
    },[counterOne])
    */
    useDocumentTitle_CustomHook(counterOne);

    const incrementCounterOne = () =>{
        console.log('Increment Counter One !!!')
        setCounterOne((prevCount) => prevCount +1);
    }

    return (
        <div>
            <button onClick={incrementCounterOne}> Counter-One {counterOne} </button>
        </div>
    )
}

export default Counter_One
