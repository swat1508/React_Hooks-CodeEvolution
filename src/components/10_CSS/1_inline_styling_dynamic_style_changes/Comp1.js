import React,{useState} from 'react'
import Comp2 from './Comp2';
function Comp1() {
    const [toogleValue, settoogleValue] = useState(false);
    const arr=['sachin','saurav','rahul','sehwag','laxman'];
    const show_hide_second_comp =() =>{
        settoogleValue(!toogleValue);
    }
    return (
        <div>
          <div>  This is component1 </div>
<button onClick={show_hide_second_comp} >Show Cricketers</button>
{ toogleValue ? <Comp2 cricList={arr}/> : null}

        </div>
    )
}

export default Comp1
