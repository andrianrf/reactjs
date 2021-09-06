import { Fragment } from "react";
import { Component } from "react";
import './ProductClass.css';

class ProductClass extends Component {
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
            <div className="card">
                <p className="product-title">Daging Ayam Berbumbu</p>
                <p className="product-price">Rp. 41.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handlerMinus}>-</button>
                    <input type="text" value={this.state.count} />
                    <button className="plus" onClick={this.handlerPlus}>+</button>
                </div>
            </div>
        </Fragment>
        );
    }
}

export default ProductClass;