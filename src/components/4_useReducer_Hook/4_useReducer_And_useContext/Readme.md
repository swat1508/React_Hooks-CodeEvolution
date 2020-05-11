      App
      |
---------------
|     |       |
A     B       C
      |       |
      D       E
              |
              F

=================================================
Our goal is to maintain a count in App.js and modify that state from 
ComponentD, ComponentE and ComponentF

we will create a counter in App.js using reducerHook
provide and conusme counterContext in required components
=================================================
App.js 
------
import React,{useReducer} from 'react';

import Comp_A from './components/4_useReducer_Hook/4_useReducer_And_useContext/Comp_A';
import Comp_B from './components/4_useReducer_Hook/4_useReducer_And_useContext/Comp_B';
import Comp_C from './components/4_useReducer_Hook/4_useReducer_And_useContext/Comp_C';


export const CountContext = React.createContext();

const initialState=0;
const reducer= (currentState,action) => {
  switch(action){
    case 'increment':
        return currentState+1;
    case 'decrement':
        return currentState-1;        
    case 'reset':
        return initialState;        
    default:
      return currentState;
  }
}


function App() {
  const [count,dispatch] = useReducer(reducer,initialState);
  return (
  <CountContext.Provider value={ {  countState:count, countDispatch:dispatch } }>
    <div className="App">
      Count is : {count}
      
     <Comp_A />
     <Comp_B />
     <Comp_C />
    </div>
    </CountContext.Provider>
  );
}

export default App;

=================================================

