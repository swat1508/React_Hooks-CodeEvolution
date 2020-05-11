import React,{useContext} from 'react'
import {UserContext,PlaceContext} from '../../App.js';


function Comp_F() {
const userName =  useContext(UserContext);
const country =  useContext(PlaceContext);
    return (
        <div>
            This is Component F
            Username is : {userName}  and is from {country}
        </div>
    )
}

export default Comp_F
