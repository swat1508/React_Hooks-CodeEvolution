import React, { useState ,useMemo} from 'react'


function DemoForUseMemo() {
    const [counterOne,setCounterOne] = useState(0);
    const [counterTwo,setCounterTwo] = useState(0);

    const incrementCounterOne = ()  => {
        setCounterOne(counterOne+1);
    }
    const incrementCounterTwo = ()  => {
        setCounterTwo(counterTwo+1);
    }

    const checkEven = useMemo( () =>{
        console.log('checkEven called !!!')
        let i=0;
            while(i<2000000000){
                i++;
            }
            if(counterOne % 2 ===0)
                return true;
            else
                return false;
    }, [counterOne]);
    
/*
    const checkEven = () =>{
        console.log('checkEven called !!!')
        let i=0;
        while(i<900000000){
            i++;
        }
            if(counterOne % 2 ===0)
                return true;
            else
                return false;
    }
    */
    return (
        <div>
            <div>
                <button onClick={incrementCounterOne}>CounterOne : {counterOne} </button>
               
                {checkEven ? 'even-numberr' : 'odd-numberrr'}
                </div>
            <div><button onClick={incrementCounterTwo}>Counter Two :{counterTwo} </button></div>

        </div>
    )
}

export default DemoForUseMemo
