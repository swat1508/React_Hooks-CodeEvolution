import React,{useState,useRef} from 'react';
import Child from './Child';

function Parent() {

    const firstNameRef= useRef('swatantra');
    const lastNameRef= useRef('sinha');

    return (
        <div>
            <div>First Name : {firstNameRef.current}</div>
            <div>LastName : {lastNameRef.current} </div>
            <Child ref={{ref1:firstNameRef,ref2:lastNameRef}}/>
        </div>
    )
}

export default Parent
