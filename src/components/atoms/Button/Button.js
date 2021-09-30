import "./Button.scss";

const Button = ({value, onClick}) => {
    return (
    <button className="btn" onClick={onClick} >{value}</button>
    );
}

export default Button;