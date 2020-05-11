import React from 'react'

function Title() {
    console.log('renderig title component ')
    return (
        <div>
           <h2>This is demo for callback hook !!!! </h2> 
        </div>
    )
}

export default React.memo(Title);
