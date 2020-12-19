import React, { Component } from 'react'

 class MouseMoveClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
                 x_pos : 0,
                 y_pos : 0
        }
    }
   

    logMouseMove = (event) => {
        console.log(' logMouseMove !! ');
        this.setState({
            x_pos : event.clientX , 
            y_pos : event.clientY
        })
    }
    componentDidMount() {
        console.log('componentDidMount !!! ');
        window.addEventListener('mousemove',this.logMouseMove);
    }

    componentDidUpdate(prevProps, prevState, snapshot) { 
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove',this.logMouseMove);
    }


    render() {
        return (
            <div>
                This is Mousemove using Component
                <br/>
                      X Position : {this.state.x_pos}
                         <br/>
                      Y Position : {this.state.y_pos}
                </div>
        )
    }
}
export default MouseMoveClass;
