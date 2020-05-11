import React,{useState,useEffect} from 'react'

function Counter_One() {
    const [counterOne,setCounterOne] = useState(0);

    useEffect(() => {
        document.title= `Count : ${counterOne}`;
    },[counterOne])
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
