import React, { Component } from 'react';

class User extends Component {
  render(){
    return (
      <h2> Ini halaman {this.props.match.params.name} </h2>
    )
  }
}

export default User;
