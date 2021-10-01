import "./Button.scss";

const Button = ({value, onClick, loading}) => {
    if(loading){
        return (
            <button className="btn disable">Loading ...</button>
        );
    }
    else{
    return (
    <button className="btn" onClick={onClick} >{value}</button>
    );
    }
}

export default Button;