import React from 'react'

function Button({clickHandler,children}) {
    console.log(`rendering button ==>  ${children}`)
    return (
        <div>
            <button onClick={clickHandler}>{children}</button>
        </div>
    )
}

export default React.memo(Button)
