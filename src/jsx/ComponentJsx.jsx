const ComponentJsx = (props) => {
    return (<p>Ini Component JSX {props.name} {props.no}</p>);
}

ComponentJsx.defaultProps = {
    name: "default"
}

export default ComponentJsx;