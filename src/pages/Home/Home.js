import { Component, Fragment } from "react";
import { connect } from "react-redux";

class Home extends Component {
    render(){
        return(
            <Fragment>
            Ini Halaman Home <br />
            email : {this.props.reduxUser.email} <br />
            localId : {this.props.reduxUser.localId} <br />
            </Fragment>
        );
    }
}

const reduxState = (state) =>({
    reduxUser: state.user
})

export default connect(reduxState, null)(Home);