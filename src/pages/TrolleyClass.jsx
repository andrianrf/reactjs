import { Fragment } from "react";
import { Component } from "react";
import ProductClass from "./ProductClass";
import {connect} from 'react-redux';
import './ProductClass.css';

class TrolleyClass extends Component {

    render(){
        return (
        <Fragment>
            <div className="header">
                <div className="troley">
                    <div className="count">{this.props.order}</div>
                </div>
            </div>
            <ProductClass />
        </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps) (TrolleyClass);