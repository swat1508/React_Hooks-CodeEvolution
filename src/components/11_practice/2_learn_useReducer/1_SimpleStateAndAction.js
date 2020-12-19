import React,{useReducer} from 'react'

const initialState= 0;
const reducerFunc = (currentState,action) => {
    switch(action){
        case 'increment':{
            console.log('reducerFunc => increment ');
            return currentState + 1;
        }
        case 'decrement':{
            console.log('reducerFunc => decrement ');
            return currentState - 1;
        }
        case 'reset':{
            console.log('reducerFunc => reset ');
            return currentState = initialState;
        }

        default:
            return currentState;
    }
}

 function Simplestateandaction(props) {
    const [count,dispatch] = useReducer(reducerFunc,initialState); 

    const incrementCounter =() => {
        console.log('incrementCounter !!!');
        dispatch('increment');
    }
    const decrementCounter =() => {
        console.log('decrementCounter !!!');
        dispatch('decrement');
    }
    const resetCounter =() => {
        console.log('resetCounter !!!');
        dispatch('reset');
    }

    return (
        <div>
            This is useReducer hook - Simple-State-And-Action
            <br/>
            Count Value is : {count} 
            <br/>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}
export default Simplestateandaction;
