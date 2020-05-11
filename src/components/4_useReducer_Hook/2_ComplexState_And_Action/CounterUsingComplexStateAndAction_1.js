import React,{useReducer} from 'react'

const initialState= { 
    myCount:0
};
const reducer = (currentState,action) => {
    switch(action.type){
        case 'increment':
            return {myCount : currentState.myCount + 1 };
        
        case 'decrement':
            return {myCount : currentState.myCount - 1 }
        
        case 'reset':
            return initialState;

        default:
            return currentState;
    }
}


function CounterUsingComplexStateAndAction_1() {
    const [count,dispatch] = useReducer(reducer,initialState);
    return (
        <div>
            <div>Count is : {count.myCount}</div>
            
            <button onClick={() => dispatch({type:'increment'})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>  


        </div>
    )
}


export default CounterUsingComplexStateAndAction_1;
