import React,{useReducer} from 'react'

const initialState= { 
    myCount:0
};
const reducer = (currentState,action) => {
    switch(action.type){
        case 'increment':
            return {myCount : currentState.myCount + action.value };
        
        case 'decrement':
            return {myCount : currentState.myCount - action.value }
        
        case 'reset':
            return initialState;

        default:
            return currentState;
    }
}


function CounterUsingComplexStateAndAction_2() {
    const [count,dispatch] = useReducer(reducer,initialState);
    return (
        <div>
            <div>Count is : {count.myCount}</div>
          
            <div>
            <button onClick={() => dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>  
            </div>

            <div>
            <button onClick={() => dispatch({type:'increment',value:5})}>Increment By 5</button>
            <button onClick={() => dispatch({type:'decrement',value:5})}>Decrement By 5</button>  
            </div>

        </div>
    )
}


export default CounterUsingComplexStateAndAction_2;
