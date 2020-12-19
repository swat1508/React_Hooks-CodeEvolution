import React from 'react'
import styled from 'styled-components';

function CompB(props) {
    return (
        <div>
{
    props.cricList.map( (cricName,index) => {     
        return <div key={index}>
        <div> {cricName}  </div>
                    </div>
          })
          
}
        </div>
    )
}

export default CompB
