import React, { useState } from 'react'
import Title from './Title';
import Count from './Count';
import Button from './Button';

function Need_For_Callback_Hook() {
    const [age,setAge]= useState(18);
    const [salary,setSalary] = useState(10000);

    const incrementAge = () => {
        setAge(age + 1);
    }
    const incrementSalary = () => {
        setSalary(salary+5000);
    }

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

export default Need_For_Callback_Hook
