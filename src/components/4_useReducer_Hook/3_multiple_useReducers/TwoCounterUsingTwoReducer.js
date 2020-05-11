import React,{useReducer} from 'react'

const initialState= { 
    count:0
};
const reducer = (currentState,action) => {
    switch(action.type){
        case 'increment':
            return {count : currentState.count + 1 };
        
        case 'decrement':
            return {count : currentState.count - 1 }
        
        case 'reset':
            return initialState;

        default:
            return currentState;
    }
}


function TwoCounterUsingTwoReducer() {
    const [myCount,dispatch1] = useReducer(reducer,initialState);
    const [yourCount,dispatch2] = useReducer(reducer,initialState);
    return (
        <div>
            <div>
                <div>My-Count is : {myCount.count}</div>
                
                <button onClick={() => dispatch1({type:'increment'})}>Increment</button>
                <button onClick={() => dispatch1({type:'decrement'})}>Decrement</button>
                <button onClick={() => dispatch1({type:'reset'})}>Reset</button>  
            </div>
            <div>
                <div>Your-Count is : {yourCount.count}</div>
                
                <button onClick={() => dispatch2({type:'increment'})}>Increment</button>
                <button onClick={() => dispatch2({type:'decrement'})}>Decrement</button>
                <button onClick={() => dispatch2({type:'reset'})}>Reset</button>  

            </div>
        </div>
    )
}


export default TwoCounterUsingTwoReducer;
