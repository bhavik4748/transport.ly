import classes from './Button.module.css';
function Button({ text }) {
    return (
        <>
            <button className={classes.btn} >{text}</button>
        </>
    )
}

export default Button;