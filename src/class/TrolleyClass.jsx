import { Fragment } from "react";
import { Component } from "react";
import ProductClass from "./ProductClass";
import './ProductClass.css';

class TrolleyClass extends Component {
    state = {
        count: 4
    }


    onCounterChange = (newValue) => {
        this.setState({
            count: newValue
        })
    }

    render(){
        return (
        <Fragment>
            <div className="header">
                <div className="troley">
                    <div className="count">{this.state.count}</div>
                </div>
            </div>
            <ProductClass onCounterChange={(value)=>this.onCounterChange(value)} />
        </Fragment>
        );
    }
}

export default TrolleyClass;