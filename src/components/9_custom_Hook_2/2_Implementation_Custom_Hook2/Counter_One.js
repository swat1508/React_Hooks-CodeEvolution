import React,{useState} from 'react'
import useCounter from './useCounter'

function Counter_One() {
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
            <div> Counter1 :{count} </div>
            <button onClick={increment}>Increment-Counter-One</button>
            <button onClick={decrement}>Decrement-Counter-One</button>
            <button onClick={reset}>Reset-Counter-One</button>
        </div>
    )
}

export default Counter_One
