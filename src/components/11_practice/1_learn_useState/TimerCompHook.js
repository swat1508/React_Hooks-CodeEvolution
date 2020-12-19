import React,{useState,useEffect} from 'react';

function TimerCompHook(props) {
    const [count,setCount] = useState(0);
    const incrementCount = () => {
         setCount((prevCount) => prevCount + 1);
      // setCount(count + 1 );
    }
    
    useEffect(() => {
        console.log('useEffect !!!');
        const myInterval = setInterval(incrementCount,1000);

        return (() => {
            console.log('useEffect ==>  return');
            clearInterval(myInterval);
        })

    },[])
    return(
        <div>
            This is Timer Component Hook !!!
            Timer : {count}
           
        </div>
    )
}

export default TimerCompHook;