import { Fragment } from "react";
import { Component } from "react";
import { GlobalConsumer } from "../context/Context";
import ProductClass from "./ProductClass";
import './ProductClass.css';

class TrolleyClass extends Component {
    render(){
        return (
            <Fragment>
            <div className="header">
                <div className="troley">
                    <div className="count">{this.props.state.totalOrder}</div>
                </div>
            </div>
            <ProductClass />
            </Fragment>
        );
    }
}

export default GlobalConsumer(TrolleyClass);