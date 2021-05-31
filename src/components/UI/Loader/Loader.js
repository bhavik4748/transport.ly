import spinner from '../../../images/giphy.gif';
import classes from './Loader.module.css';

const Loader = () => {
    return (
        <div className={classes.loading}>
            <img src={spinner} alt="loading" className={classes.loadingImage} />
            <h3>Loading data...</h3>
        </div>
    )
}
export default Loader;