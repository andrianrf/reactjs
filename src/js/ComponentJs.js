function ComponentJs(props) {
    return (<p>Ini ComponentJs {props.name}</p>);
}

ComponentJs.defaultProps = {
    name: "default"
}

export default ComponentJs;