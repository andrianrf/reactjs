import { Fragment } from "react";
import { Component } from "react";
import { RootContext } from "../App";
import './ProductClass.css';

class CounterClass extends Component {
    
    render(){
        return (
            <RootContext.Consumer>
                {
                    context => {
                        return ( 
                            <Fragment>
                            <div className="counter">
                                <button className="minus" onClick={() => context.dispatch({type: 'MINUS_ORDER'})}>-</button>
                                <input type="text" readOnly value={context.state.totalOrder} />
                                <button className="plus" onClick={() => context.dispatch({type: 'PLUS_ORDER'})}>+</button>
                            </div>
                            </Fragment>
                        )
                    }
                }
            </RootContext.Consumer>
        );
    }
}

export default CounterClass;