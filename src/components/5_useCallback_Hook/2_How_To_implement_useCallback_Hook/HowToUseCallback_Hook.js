import React, { useState,useCallback } from 'react'
import Title from './Title';
import Count from './Count';
import Button from './Button';


function HowToUseCallback_Hook() {
    const [age,setAge]= useState(18);
    const [salary,setSalary] = useState(10000);

    const incrementAge = useCallback (() => {
        setAge(age + 1);
    },[age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary+5000);
    },[salary]);

    return (
        <div>
            <Title/>
            <Count text="Age" count ={age} />
            <Button clickHandler={incrementAge}>Increment Age</Button>

            <Count text="Salary" count ={salary} />
            <Button clickHandler={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default HowToUseCallback_Hook
