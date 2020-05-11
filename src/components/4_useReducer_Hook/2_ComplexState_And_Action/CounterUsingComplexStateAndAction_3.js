import React,{useReducer} from 'react'

const initialState= { 
    myCount:0,
    yourCount:0
};
const reducer = (currentState,action) => {
    switch(action.type){
        case 'increment':
            return {...currentState, myCount : currentState.myCount + action.value };
        
        case 'decrement':
            return {...currentState, myCount : currentState.myCount - action.value }
        
        case 'reset':
            return initialState;

        case 'increment2':
            return {...currentState,yourCount : currentState.yourCount + action.value };
            
        case 'decrement2':
            return {...currentState,yourCount : currentState.yourCount - action.value }            

        default:
            return currentState;
    }
}


function CounterUsingComplexStateAndAction_3() {
    const [count,dispatch] = useReducer(reducer,initialState);
    return (
        <div>
            <div>My Count is : {count.myCount}</div>
            <div>Your Count is : {count.yourCount}</div>
          
            <div>
            <button onClick={() => dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>  
            </div>

            <div>
            <button onClick={() => dispatch({type:'increment',value:5})}>Increment By 5</button>
            <button onClick={() => dispatch({type:'decrement',value:5})}>Decrement By 5</button>  
            </div>

            <div>
            <button onClick={() => dispatch({type:'increment2',value:1})}>Increment for other counter</button>
            <button onClick={() => dispatch({type:'decrement2',value:1})}>Decrement for other counter </button>  
            </div>

        </div>
    )
}


export default CounterUsingComplexStateAndAction_3;
