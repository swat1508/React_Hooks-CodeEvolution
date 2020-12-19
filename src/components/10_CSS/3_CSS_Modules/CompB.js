import React, { Component } from 'react'
import myClasses from './CompA.module.css';

 class CompB extends Component {
  
    state = {
        counter:0
    }
    
    clickHandler = (button_class_list) => {        
        console.log('button-class-list ==> ', button_class_list);
        this.setState((prevState) => ({ counter: prevState.counter + 1 }))
       
        // if(this.state.counter >= 3){
        //     button_class_list.push(myClasses.bold);        
        //     console.log('now button_class_list => ' ,button_class_list); 
        //     console.log('btnClass => ' , btnClass);       
        // }
        
    }

    render() {
        let btnClass = [myClasses.Button];
       if(this.state.counter >= 3){
            btnClass.push(myClasses.make_bold)
       }
       if(this.state.counter >= 5){
        btnClass.push(myClasses.add_border)
        }

        return (
            <div>
                <div>Demo for counter</div>
                <div>Button Class is : {btnClass} </div>
                <button onClick={this.clickHandler} className={btnClass.join(" ")}> Counter : {this.state.counter}</button>
            </div>
        )
    }
}

export default CompB
