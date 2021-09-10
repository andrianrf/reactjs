import { Fragment } from "react";
import { Component } from "react";
import CounterClass from "./CounterClass";
import './ProductClass.css';

class ProductClass extends Component {
    render(){
        return (
        <Fragment>
            <div className="card">
                <p className="product-title">Daging Ayam Berbumbu</p>
                <p className="product-price">Rp. 41.000</p>
                <CounterClass />
            </div>
        </Fragment>
        );
    }
}

export default ProductClass;