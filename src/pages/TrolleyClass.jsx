import { Fragment } from "react";
import { Component } from "react";
import { RootContext } from "../App";
import ProductClass from "./ProductClass";
import './ProductClass.css';

class TrolleyClass extends Component {
    render(){
        return (
            <RootContext.Consumer>
                {
                    context => {
                        return (
                            <Fragment>
                            <div className="header">
                                <div className="troley">
                                    <div className="count">{context.state.totalOrder}</div>
                                </div>
                            </div>
                            <ProductClass />
                            </Fragment>
                        )
                    }
                }
            </RootContext.Consumer>
        );
    }
}

export default TrolleyClass;