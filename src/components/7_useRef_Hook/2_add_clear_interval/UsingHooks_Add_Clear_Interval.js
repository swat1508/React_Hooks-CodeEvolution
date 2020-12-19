import React,{useState,useEffect,useRef} from 'react'

function UsingHooks_Add_Clear_Interval() {
    const [timer,setTimer]= useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
       //const interval  = setInterval(() => {
        intervalRef.current = setInterval(() => {
             setTimer(prevTimer => prevTimer + 1);
       }, 1000);

        return () => {
          //  clearInterval(interval);
              clearInterval(intervalRef.current);
        };
    }, [])

    return (
        <div>
            Hook Timer : {timer}
            <button onClick={()=> clearInterval(intervalRef.current)}>Clear Hook Interval</button>
        </div>
    )
}

export default UsingHooks_Add_Clear_Interval;
