import { Component, Fragment } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../config/firebase/firebaseApp";
import { connect } from "react-redux";

import './Register.scss';
import Button from "../../components/atoms/Button/Button";
import { Loading } from "../../config/redux/action/Loading";


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
    
        this.props.reduxChangeIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
                    var user = userCredential.user;
                    // ...
                    console.log("user: ", user);
                    console.log("success: ", userCredential);
                    this.props.reduxChangeIsLoading(false);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log("error code: ", errorCode);
            console.log("error message: ", errorMessage);
            this.props.reduxChangeIsLoading(false);
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

                        <Button onClick={() => this.handleSubmit()} value="Register" loading={this.props.reduxIsLoading } />
                        <Button onClick={() => this.props.reduxLoading({message:"message loading"})} value="Loading" loading={this.props.reduxIsLoading } />
                        <Button onClick={this.props.reduxChangeUsername} value="Change Username" loading={this.props.reduxIsLoading } />
                    </div>
                </div>
            </Fragment>
        );
    }
}

const reduxState = (state) =>({
    reduxPopup: state.popup,
    reduxUsername: state.username,
    reduxIsLoading: state.isLoading
})

const reduxReducer = (dispatch) => ({
    reduxChangeUsername: () => dispatch({type: "CHANGE_USERNAME", value: "Andrian Ramadhan Febriana"}),
    reduxLoading: (data) => dispatch(Loading(data)),
    reduxChangeIsLoading: (data) => dispatch({type: "CHANGE_LOADING", value: data})
})

export default connect(reduxState, reduxReducer)(Register);