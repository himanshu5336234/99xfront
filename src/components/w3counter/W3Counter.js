import React from 'react';
import  "./W3Counter.scss";

export default class extends React.Component{

  constructor(props){

    super(props);

    this.state = {
      counter: (props.initialValue)?props.initialValue:0,
    }

    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);

    this.parentPropsChange();
    
  }

  componentWillReceiveProps(nextProps){
    // this.setState({
    //   modal:{
    //     show: nextProps.show,
    //     showButtons: true,
    //     counter:nextProps.initialValue
    //   }
    // })
  }

  parentPropsChange(){
    
    this.props.onCounterChange({
      callback: this.props.callback,
      counter: this.state.counter
    })

  }

  increaseCounter(){

    console.log("Increase Counter");
    this.setState(prevState => {
        return{
            ...prevState,
            counter: Math.ceil(prevState.counter)+1
        }
    }, ()=>{
      
      this.parentPropsChange();

    })

    

  }

  decreaseCounter(){
    
    // console.log("Decrease Counter");
    this.state.counter > (this.props.minValue || 0) && this.setState(prevState => {
        return{
            ...prevState,
            counter: prevState.counter-1
        }
    },()=>{

      this.parentPropsChange();

    });

    

  }

  render(){
    return (
      <div>
        <div className="w3counter-container">
        <button onClick={this.decreaseCounter}>
          <i className="fa fa-minus" aria-hidden="true"></i>
        </button>

          <span>{this.state.counter}</span>
          
          <button onClick={this.increaseCounter}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}