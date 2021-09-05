import { Component } from "react";

class ComponentClass extends Component {
    constructor(props){
      super(props);
    }

    render(){
        return (<p>Ini Component Class {this.props.name}</p>);
    }
}

ComponentClass.defaultProps = {
    name: "default"
}

export default ComponentClass;