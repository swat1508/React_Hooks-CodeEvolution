import React, { useContext } from 'react'
import {user_context,address_context} from './context_hook';

function Learn_Context_CompF(props) {
    const user_name = useContext(user_context);
    const address = useContext(address_context);

    return (
        <div>
            This is Component F
            <br/>
            Name is : {user_name}
            <br/>
            Address is : {address}
        </div>
    )
}

export default Learn_Context_CompF;