import DayComponent from './DayComponent/DayComponent';
import OrdersComponent from './OrdersComponent/OrdersComponent';
import Button from '../UI/Button/Button';
import classes from './DaysComponent.module.css';

function DaysComponent({ flightsData, flightsByDaysDetails, orders }) {
    let flightStatsByDay = null
    flightStatsByDay = flightsByDaysDetails.map((x, index) => {
        return (
            <div key={index}>
                <DayComponent flights={x} day={index} ></DayComponent>
            </div>
        )
    })
    return (
        <div className={classes.parentDiv}>
            <div className={classes.topDiv}>
                <span className={classes.companyLabel}>Transport.ly</span>
                <span>An automated air freight scheduling service.</span>
                <span className={classes.buttonDiv}><Button text="VIEW ORDER SCHEDULE" /></span>
            </div>

            {flightStatsByDay}
            <OrdersComponent />
        </div>
    )
}

export default DaysComponent;