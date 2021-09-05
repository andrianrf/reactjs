const ComponentJsx = (props) => {
    return (<p>Ini Component JSX {props.name}</p>);
}

ComponentJsx.defaultProps = {
    name: "default"
}

export default ComponentJsx;