function ComponentJs(props) {
    return (<p>Ini ComponentJs {props.name} {props.no}</p>);
}

ComponentJs.defaultProps = {
    name: "default"
}

export default ComponentJs;