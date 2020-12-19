import React, { useState,useEffect } from 'react';
import myClasses from './CompA.module.css';

let name= 'swatantra';
let btnClass = [myClasses.Button];

function Comp_A() {
    
    const [counter, setcounter] = useState(0);
    //let btnClass = [myClasses.Button];

    useEffect(() => {
        
        console.log('use-effect called !!!!!');
        if(counter >= 3){
            btnClass.push(myClasses.make_bold);
            console.log('3 or more - btnClas is : ' , btnClass);
        }
        if(counter >= 5){
            btnClass.push(myClasses.add_border)
            console.log('5 or more - btnClas is : ' , btnClass);
        }

    }, [btnClass])

    const clickHandler = () => {
        setcounter(prevCount => prevCount + 1);
    }

    const getClass=()=>{
        console.log('getClass => btnClass is : ' , btnClass.join(' '));
        return btnClass.join(' ');
    }
    return (
        <div>
            <div>This is demo counter, notice color of button changes on click </div>
            <div> Button Class is : {getClass(btnClass)} </div>
            <button onClick={clickHandler} className={getClass()}>Counter:{counter}</button>
        </div>
    )
}

export default Comp_A;
