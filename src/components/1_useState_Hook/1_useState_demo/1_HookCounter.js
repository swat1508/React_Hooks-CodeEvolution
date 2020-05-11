import React,{useState} from 'react'

function HookCounter() {
    const initialCount=0;
    const [count, setcount] = useState(initialCount);

  
   const incrementByTen = () => {
        setcount(prevCount => prevCount + 10);
   }

   const decrementByFive = () => {
    setcount(prevCount => prevCount -5);
   }
    return (
        <div>
            
            <div>Count : {count} </div>

            <button onClick = {() => setcount(initialCount)}> Reset  </button>
            <button onClick = {incrementByTen}> Increment by 10  </button>
            <button onClick = {decrementByFive}> Decrement by 5 </button>
        </div>
    )
}

export default HookCounter
