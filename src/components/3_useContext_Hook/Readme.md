Context
-------
Context provides a way to pass data through the component tree without having to pass props down manually
at each level.

App Component
     |
_    _    __
|    |     |
|    |     |
A    B     C
     |     |
     D     E
           |
           F

goal is to pass username from App to Component F
So App Component has ComponentC , ComponentC has ComponentE and ComponentE has componentF
-----------------------------------------------------------------------
App.js
=======
import Comp_C from './components/3_useContext_Hook/Comp_C';

export const UserContext = React.createContext();
export const PlaceContext = React.createContext();


function App() {
  return (

    <div className="App">
      <UserContext.Provider value={'swatantra'}>
      <PlaceContext.Provider value={'India'}>
        <Comp_C/>
     </PlaceContext.Provider>
     </UserContext.Provider>
    </div>
  );
}

export default App;
-----------------------------------------------------------------------

ComponentF
==========
import React,{useContext} from 'react'
import {UserContext,PlaceContext} from '../../App.js';


function Comp_F() {
const userName =  useContext(UserContext);
const country  =  useContext(PlaceContext);

    return (
        <div>
            This is Component F
            Username is : {userName}  and is from {country}
        </div>
    )
}

export default Comp_F;
-----------------------------------------------------------------------------