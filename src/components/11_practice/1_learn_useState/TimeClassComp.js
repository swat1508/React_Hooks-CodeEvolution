import React, { Component } from 'react'

class Timeclasscomp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count:0
        }
    }
increaseCountByOne = () => {
    // this.setState({count : this.state.count + 1 });

  /*  this.setState((prevState) => {
         return {count:prevState.count + 1}
      })   */

    this.setState((prevState) => ({
        count : prevState.count + 1
    }))
}
    componentDidMount() {
        this.myInterval = setInterval(this.increaseCountByOne,1000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
         if (prevState.name !== this.state.name) { 
             this.handler() 
            } 
    }

    componentWillUnmount() {
        console.log('componentWillUnmount !!! ');
        clearInterval(this.myInterval);
    }

    render() {
        return (
           <div>
               This is Timer using Class Component : 
               {this.state.count}
           </div>
        )
    }
}
export default Timeclasscomp;
