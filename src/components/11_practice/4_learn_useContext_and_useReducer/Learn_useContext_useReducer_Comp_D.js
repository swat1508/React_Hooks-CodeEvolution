import React,{useContext} from 'react'
import {passed_context} from './Counter_UseContext_UseReducer';



 function LearnUsecontext_Usereducer_CompD(props) {
    const context_passed = useContext(passed_context);

    const incrementCounter = () => {
        console.log('LearnUsecontext_Usereducer_CompD ==> incrementCounter !!!! ');
        context_passed.myDispatch({
            type:'increment',
            payload:10
        })
    }

    const decrementCounter = () => {
        console.log('LearnUsecontext_Usereducer_CompD ==> incrementCounter !!!! ');
        context_passed.myDispatch({
            type:'decrement',
            payload:10
        })
    }

    const resetCounter = () => {
        console.log('LearnUsecontext_Usereducer_CompD ==> resetCounter !!!! ');
        context_passed.myDispatch({
            type:'reset'
        })
    }

    return (
       <div>
           Component D -
           <button onClick={incrementCounter} > Increment Counter </button>
            <button onClick={decrementCounter} > Decrement Counter </button>
            <button onClick={resetCounter} > Resst Counter </button>
           <br/>
           
       </div>
    )
}

export default LearnUsecontext_Usereducer_CompD;
