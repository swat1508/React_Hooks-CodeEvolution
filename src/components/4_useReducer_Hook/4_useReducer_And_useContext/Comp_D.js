import React,{useContext} from 'react';
import {CountContext} from '../../../App';

function Comp_D() {
    const countContext = useContext(CountContext);
    return (
        <div>
            Component D - {countContext.countState}

            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default Comp_D
