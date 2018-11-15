import React, {Component} from  'react';

class Counter extends Component {
    constructor(){
        super();
        this.state ={Counter:0};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment(){
        let counter = this.state.Counter;
        this.setState({Counter:counter+1})
       // alert("Increment");
    }
    decrement(){    
        
        let counter = this.state.Counter;
        this.setState({Counter:counter-1})
        //alert("Decrement");
    }
    render(){
        return (
            <div className=" container">
            <br/> <br/>
            <div className="row">
              <div className="col-md-1"><button className="btn btn-primary" 
              onClick={this.decrement}>Remove</button></div>
                   <div className="col-md-1"> <span className="badge badge-warning">{this.state.Counter}</span></div>
                    <div className="col-md-1"><button className="btn btn-primary"
                    onClick={this.increment}>Add</button></div>
              </div>
              </div>
        )
            
        
    }
}

export default Counter;