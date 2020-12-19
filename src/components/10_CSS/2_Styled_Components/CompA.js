import React,{useState} from 'react';
import CompB from './CompB';
import styled from 'styled-components';

const AppStyledButton = styled.button`
background-color : ${props => props.alt===1 ? 'green': 'red'};
color:white;
font:inherit;
border:1px solid blue;
padding:8px;
cursor:pointer;

&:hover{
  background-color : : ${props => props.alt ? 'lightgreen': 'salmon'};
  color:black;
}

`;

function CompA() {
    const [toogleValue, settoogleValue] = useState(false);
    const arr=['sachin','saurav','rahul','sehwag','laxman'];
    const show_hide_second_comp =() =>{
        settoogleValue(!toogleValue);
    }

    return (
        <div>
            <div>This is component component component A </div>
            {/* <button onClick={show_hide_second_comp} >Show Cricketers</button> */}
            { toogleValue ? <CompB cricList={arr}/> : null}

<AppStyledButton alt={toogleValue ? 1:0} 
                 onClick={show_hide_second_comp}>Toogle Persons </AppStyledButton>


        </div>
    )
}

export default CompA
