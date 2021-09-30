import { Component, Fragment } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../config/firebase/firebaseApp";
import { connect } from "react-redux";

import './Register.scss';


class Register extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,   
        });
        console.log([e.target.id], e.target.value)
    }

    handleSubmit = () => {
        const {email, password} = this.state;

        const auth = getAuth(firebaseApp);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
                    var user = userCredential.user;
                    // ...
                    console.log("user: ", user);
                    console.log("success: ", userCredential);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log("error code: ", errorCode);
            console.log("error message: ", errorMessage);
        });
    }

    render(){
        return (
            <Fragment>
                <div className="auth-container">
                    <div className="auth-card">
                        <p className="auth-title">Register {this.props.reduxUsername} </p>
                        <input className="input" id="email" type="text" onChange={this.handleChangeText} placeholder="Email" />
                        <input className="input" id="password" type="password" onChange={this.handleChangeText} placeholder="Password" />
                        <button className="btn" onClick={this.handleSubmit} >Register</button>
                        <button className="btn" onClick={this.props.reduxChangeUsername} >Change Username</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const reduxState = (state) =>({
    reduxPopup: state.popup,
    reduxUsername: state.username
})

const reduxReducer = (dispatch) => ({
    reduxChangeUsername: () => dispatch({type: "CHANGE_USERNAME", value: "Andrian Ramadhan Febriana"})
})

export default connect(reduxState, reduxReducer)(Register);