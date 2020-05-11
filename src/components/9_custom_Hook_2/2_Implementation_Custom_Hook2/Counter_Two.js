import React,{useState} from 'react'
import useCounter from './useCounter'

function Counter_Two() {
    const [count,increment,decrement,reset] =  useCounter();
    // const [counerOne,setCounterOne] = useState(0);

    // const incrementCounterOne = () =>{
    //     setCounterOne(prevCounter => prevCounter + 1)
    // }
    // const decrementCounterOne = () =>{
    //     setCounterOne(prevCounter => prevCounter - 1)
    // }
    // const resetCounterOne = () =>{
    //     setCounterOne(0);
    // }

    return (
        <div>            
            <div> Counter2 :{count} </div>
            <button onClick={increment}>Increment-Counter-Two</button>
            <button onClick={decrement}>Decrement-Counter-Two</button>
            <button onClick={reset}>Reset-Counter-Two</button>
        </div>
    )
}

export default Counter_Two
