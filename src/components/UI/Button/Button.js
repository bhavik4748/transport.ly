import classes from './Button.module.css';
function Button({ text, clickHandler }) {
    return (
        <>
            <button onClick={clickHandler} className={classes.btn} >{text}</button>
        </>
    )
}

export default Button;