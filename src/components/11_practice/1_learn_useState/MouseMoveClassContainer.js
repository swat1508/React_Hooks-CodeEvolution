import React, { Component } from 'react'
import MouseMoveClass from './MouseMoveClass';
class MouseMoveClassContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display : true
        }
    }

    toggleDisplay = () => {
        console.log('toggleDisplay !!!');
        this.setState({display : !this.state.display});
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
         if (prevState.name !== this.state.name) { 
             this.handler() 
            } 
    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div>
                 <button onClick={this.toggleDisplay} > Toggle Display</button>
                 
                     {
                     this.state.display ? <MouseMoveClass /> : null
                    }
                 
            </div>
        )
    }
}
export default MouseMoveClassContainer;