import React,{useState} from 'react'

function Counter_Two() {
    const [counerTwo,setCounterTwo] = useState(0);

    const incrementCounterTwo = () =>{
        setCounterTwo(prevCounter => prevCounter + 1)
    }
    const decrementCounterTwo = () =>{
        setCounterTwo(prevCounter => prevCounter - 1)
    }
    const resetCounterTwo = () =>{
        setCounterTwo(0);
    }

    return (
        <div>            
            <div> Counter2 :{counerTwo} </div>
            <button onClick={incrementCounterTwo}>Increment-Counter-Two</button>
            <button onClick={decrementCounterTwo}>Decrement-Counter-Two</button>
            <button onClick={resetCounterTwo}>Reset-Counter-Two</button>
        </div>
    )
}

export default Counter_Two
