import React,{useState} from 'react'

function Counter_One() {
    const [counerOne,setCounterOne] = useState(0);

    const incrementCounterOne = () =>{
        setCounterOne(prevCounter => prevCounter + 1)
    }
    const decrementCounterOne = () =>{
        setCounterOne(prevCounter => prevCounter - 1)
    }
    const resetCounterOne = () =>{
        setCounterOne(0);
    }

    return (
        <div>            
            <div> Counter1 :{counerOne} </div>
            <button onClick={incrementCounterOne}>Increment-Counter-One</button>
            <button onClick={decrementCounterOne}>Decrement-Counter-One</button>
            <button onClick={resetCounterOne}>Reset-Counter-One</button>
        </div>
    )
}

export default Counter_One
