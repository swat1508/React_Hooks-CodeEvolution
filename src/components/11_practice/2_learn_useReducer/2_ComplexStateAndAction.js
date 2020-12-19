import React, { useReducer } from 'react';

const initial_state = {
    count:0
};

const reducerFunc = (current_state , action) => {
    switch(action.type){
        case 'increment':{
            console.log('reducerFunc => action.type = increment by : ', action.payload);
            return {count  : current_state.count + action.payload}
        }
        case 'decrement':{
            console.log('reducerFunc => action.type = decrement by : ', action.payload);
            return {count : current_state.count - action.payload}
        }
        case 'reset':{
            console.log('reducerFunc => action.type = reset to zero : ');
            return initial_state
        }
        default:{
            return current_state;
        }
    }
}

function ComplexStateAndAction(props) {
    const [updatedCount,dispatch] = useReducer(reducerFunc,initial_state);

    const increment_one = () => {
        console.log('increment_one !!!');
        dispatch({
            type:'increment',
            payload:1
        });
    }
    const decrement_one = () => {
        console.log('decrement_one !!!');
        dispatch({
            type:'decrement',
            payload:1
        });
    }

    const reset_zero = () => {
        console.log('reset_zero !!!');
        dispatch({
            type:'reset',
            payload:0
        });
    }

    const increment_ten = () => {
        console.log('increment_ten !!!');
        dispatch({
            type:'increment',
            payload:10
        });
    }
    const decrement_ten = () => {
        console.log('decrement_ten !!!');
        dispatch({
            type:'decrement',
            payload:10
        });
    }

    return (
        <div>
            Learning useReducer Hook using ComplexStateAndAction
            <br/>
            Updated Count is : {updatedCount.count}
            <br/>
                <button onClick={increment_one}>Increment By 1</button>
                <button onClick={decrement_one}>Decrement By 1</button>
                <button onClick={reset_zero}>Reset</button>
                <br/>  <br/>
                <button onClick={increment_ten}>Increment By 10</button>
                <button onClick={decrement_ten}>Decrement By 10</button>
        </div>
    )
}
export default ComplexStateAndAction;
