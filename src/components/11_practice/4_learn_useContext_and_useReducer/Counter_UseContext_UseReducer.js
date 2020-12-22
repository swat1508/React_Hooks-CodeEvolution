import React,{useReducer} from 'react';
import LearnUsecontext_Usereducer_CompA from './Learn_useContext_useReducer_Comp_A';
import LearnUsecontext_Usereducer_CompB from './Learn_useContext_useReducer_Comp_B';
import LearnUsecontext_Usereducer_CompC from './Learn_useContext_useReducer_Comp_C';

const reducer_function = (currentState,action) => {
    switch(action.type){
        case 'increment':{
                console.log('reducer_function => action.type = increment and action.payload : ' ,  action.payload);
                return {
                    count  : currentState.count + action.payload
                }
        }

        case 'decrement':{
            console.log('reducer_function => action.type = decrement and action.payload : ' ,  action.payload);
            return {
                count  : currentState.count - action.payload
            }
    }

    case 'reset':{
        console.log('reducer_function => action.type = reset and action.payload : ');
        return initial_state;
    }

        default:{
            console.log('reducer_function => action.type = default');
            return currentState;
        }
    }
}

const initial_state = {count:0};

export const passed_context = React.createContext();

 function CounterUsecontextUsereducer(props) {
    
      const [updatedCount,dispatch] = useReducer(reducer_function , initial_state);

    const incrementCounter = () => {
        dispatch({
            type:'increment',
            payload:10
        });
    }

    const decrementCounter = () => {
        dispatch({
            type:'decrement',
            payload:10
        });
    }

    const resetCounter = () => {
        dispatch({
            type:'reset'
        });
    }

    return (
       <div>
           This is CounterUsecontextUsereducer !!!
           <br/>
           <h1>  Counter Value is : {updatedCount.count}  </h1>
           

      <passed_context.Provider value={{myCount : updatedCount, myDispatch:dispatch}}>
         
                <LearnUsecontext_Usereducer_CompA />
                <br /> <br />
                <LearnUsecontext_Usereducer_CompB />
                <br /> <br />
                <LearnUsecontext_Usereducer_CompC />
           
      </passed_context.Provider>

       </div>
    )
}

export default CounterUsecontextUsereducer;
