import { Fragment, useState } from "react";
import { Component } from "react";

// class Hook extends Component {
//     state = {
//         counter: 0
//     }

//     plus = () => {
//         this.setState({
//             counter: this.state.counter + 1
//         })
//     }

//     render(){
//         return (
//         <Fragment>
//             Counter : {this.state.counter}
//             <button onClick={this.plus}>Plus</button>
//         </Fragment>
//         );
//     }
// }

const Hook = () => {
    const [counter, plus] = useState(0);
    return(
        <Fragment>
            Counter : {counter}
            <button onClick={() => plus(counter+1)}>Plus</button>
        </Fragment>
    );
}

export default Hook;