import React, { Component } from 'react'

class UsingClass_Add_Clear_Interval extends Component {
   //interval

    constructor(props) {
        super(props)
        this.state = {
             timer:0
        }
    }
    componentWillMount(){        
        this.interval=setInterval(()=> {
            this.setState(prevState =>({timer:prevState.timer + 1}) )
        },1000)
    }
    
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                Class Timer : {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>Clear Class Timerval</button>
            </div>
        )
    }
}

export default UsingClass_Add_Clear_Interval
