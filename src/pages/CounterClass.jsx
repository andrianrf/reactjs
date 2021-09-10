import { Fragment } from "react";
import { Component } from "react";
import { GlobalConsumer } from "../context/Context";
import './ProductClass.css';

class CounterClass extends Component {
    
    render(){
        return (
            <Fragment>
            <div className="counter">
                <button className="minus" onClick={() => this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
                <input type="text" readOnly value={this.props.state.totalOrder} />
                <button className="plus" onClick={() => this.props.dispatch({type: 'PLUS_ORDER'})}>+</button>
            </div>
            </Fragment>
        );
    }
}

export default GlobalConsumer(CounterClass);