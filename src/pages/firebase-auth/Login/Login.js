import { Component, Fragment } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../../config/firebase/firebaseApp";
import { connect } from "react-redux";

import '../../../assets/css/Global.scss';
import Button from "../../../components/atoms/Button/Button";


class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,   
        });
    }

    handleSubmit = () => {
        const {email, password} = this.state;
    
        const auth = getAuth(firebaseApp);
    
        this.props.reduxChangeIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
                    var user = userCredential.user;
                    // ...
                    console.log("user: ", user);
                    console.log("success: ", userCredential);
                    this.props.reduxChangeIsLoading(false);

                    const dataUser = {
                        email: userCredential._tokenResponse.email,
                        localId: userCredential._tokenResponse.localId
                    }

                    console.log("dataUser", dataUser);
                    this.props.reduxChangeUser(dataUser);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log("error code: ", errorCode);
            console.log("error message: ", errorMessage);
            this.props.reduxChangeIsLoading(false);
        });

        this.setState({
            email: '',
            password: '' 
        });
    }


    render(){
        return (
            <Fragment>
                <div className="container">
                    <div className="card">
                        <p className="title">Login </p>
                        <input className="input" id="email" type="text" onChange={this.handleChangeText} placeholder="Email" value={this.state.email} />
                        <input className="input" id="password" type="password" onChange={this.handleChangeText} placeholder="Password" value={this.state.password} />

                        <Button onClick={() => this.handleSubmit()} value="Login" loading={this.props.reduxIsLoading } />
                    </div>
                </div>
            </Fragment>
        );
    }
}

const reduxState = (state) =>({
    reduxIsLoading: state.isLoading
})

const reduxReducer = (dispatch) => ({
    reduxChangeIsLoading: (data) => dispatch({type: "CHANGE_LOADING", value: data}),
    reduxChangeUser: (data) => dispatch({type: "CHANGE_USER", value: data}),
})

export default connect(reduxState, reduxReducer)(Login);