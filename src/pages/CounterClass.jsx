import { Fragment } from "react";
import { Component } from "react";
import './ProductClass.css';

class CounterClass extends Component {
    
    state = {
        count: 4
    }

    handlerCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlerPlus = () => {
        this.setState({
            count: this.state.count+1
        }, () => this.handlerCounterChange(this.state.count));
    }

    handlerMinus = () => {
        if(this.state.count>0){
        this.setState({
            count: this.state.count-1
        }, () => this.handlerCounterChange(this.state.count));
    }
    }
    
    render(){
        return (
        <Fragment>
                <div className="counter">
                    <button className="minus" onClick={this.handlerMinus}>-</button>
                    <input type="text" value={this.state.count} />
                    <button className="plus" onClick={this.handlerPlus}>+</button>
                </div>
        </Fragment>
        );
    }
}

export default CounterClass;