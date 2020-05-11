import React,{useState,useEffect} from 'react'

function Counter_Two() {
    const [counterTwo,setCounterTwo] = useState(0);
/*
    useEffect(() => {
        document.title= `Count : ${counterTwo}`;
    },[counterTwo])
    */
   useDocumentTitle_CustomHook(counterTwo);

    const incrementCounterTwo = () =>{
        console.log('Increment Counter two !!!')
        setCounterTwo((prevCount) => prevCount +1);
    }

    return (
        <div>
            <button onClick={incrementCounterTwo}> Counter-Two {counterTwo} </button>
        </div>
    )
}

export default Counter_Two;
