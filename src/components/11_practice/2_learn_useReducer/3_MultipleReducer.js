import React,{useReducer} from 'react';

const initialState = {
    count:0
};

const reducerFunc = (currentState,action) => {
    switch(action.type){
        case 'increment':{
            console.log('reducerFunc => action.type = increment !!!');
            return {count : currentState.count + action.payload};
        }

        case 'decrement':{
            console.log('reducerFunc => action.type = decrement !!!');
            return {count : currentState.count - action.payload};
        }

        case 'reset':{
            console.log('reducerFunc => action.type = reset !!!');
            return initialState;
        }
    }
}

function Multiplereducer(props) {
    const [updatedCounter1,dispatch1] = useReducer(reducerFunc,initialState);
    const [updatedCounter2,dispatch2] = useReducer(reducerFunc,initialState); 

    const incrementCounterByOne = () => {
        console.log('incrementCounterByOne !!!');
        dispatch1({
            type:'increment',
            payload:1
        });
    }

    const decrementCounterByOne = () => {
        console.log('decrementCounterByOne !!!');
        dispatch1({
            type:'decrement',
            payload:1
        });
    }

    const resetCounterOneToZero = () => {
        console.log('resetCounterToZero !!!');
        dispatch1({
            type:'reset'
        });
    }
    const incrementCounterByTen = () => {
        console.log('incrementCounterByTen !!!');
        dispatch2({
            type:'increment',
            payload:10
        });
    }
    const decrementCounterByTen = () => {
        console.log('decrementCounterByTen !!!');
        dispatch2({
            type:'decrement',
            payload:10
        });
    }
    const resetCounterTwoToZero = () => {
        console.log('resetCounterToZero !!!');
        dispatch2({
            type:'reset'
        });
    }
    return (
       <div>
           Learning useReducer - Part 3 : Multiple- useReducer
           <br/>
           Updated Counter 1 is : {updatedCounter1.count} 
            <br/>
            Updated Counter 2 is : {updatedCounter2.count}
            <br/>
            <button onClick={incrementCounterByOne}>Increase Counter1 By 1</button>
            <button onClick={decrementCounterByOne}>Decrease Counter1 By 1</button>
            <button onClick={resetCounterOneToZero}>Reset Counter1 To 0</button>
            <br/> <br/>
            <button onClick={incrementCounterByTen}>Increase Counter1 By 10</button>
            <button onClick={decrementCounterByTen}>Decrease Counter1 By 10</button>
            <button onClick={resetCounterTwoToZero}>Reset Counter2 To 0</button>
       </div>
    )
}

export default Multiplereducer;
