import { Fragment } from "react";
import { Component } from "react";
import globalActionType from "../redux/reducer/globalActionType";
import {connect} from 'react-redux';
import './ProductClass.css';

class CounterClass extends Component {
       
    render(){
        return (
        <Fragment>
                <div className="counter">
                    <button className="minus" onClick={this.props.handleMinus}>-</button>
                    <input type="text" value={this.props.order} readOnly />
                    <button className="plus" onClick={this.props.handlePlus}>+</button>
                </div>
        </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: globalActionType.PLUS_ORDER}),
        handleMinus: () => dispatch({type: globalActionType.MINUS_ORDER})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);