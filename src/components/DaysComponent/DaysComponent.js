import { useState } from 'react';
import DayComponent from './DayComponent/DayComponent';
import OrdersComponent from './OrdersComponent/OrdersComponent';
import { ordersFlights } from '../../services/Utils';
import Button from '../UI/Button/Button';
import classes from './DaysComponent.module.css';


function DaysComponent({ flightsData, flightsByDaysDetails, orders }) {
    const [btnFlag, setBtnFlag] = useState(false);
    const orderFlightArr = ordersFlights(orders, flightsData);
    let flightStatsByDay = null;
    flightStatsByDay = flightsByDaysDetails.map((x, index) => {
        return (
            <div key={index}>
                <DayComponent flights={x} day={index} ></DayComponent>
            </div>
        )
    })

    const BtnClickHandler = (event) => {
        event.preventDefault();
        setBtnFlag(!btnFlag);
    }

    let childComponent = null;
    let btnText;
    if (!btnFlag) {
        childComponent = flightStatsByDay;
        btnText = 'VIEW ORDER SCHEDULE';
    }
    else {
        childComponent = <OrdersComponent orderFlightArr={orderFlightArr} />
        btnText = 'VIEW FLIGHT SCHEDULE';
    }


    return (
        <div className={classes.parentDiv}>
            <div className={classes.topDiv}>
                <span className={classes.companyLabel}>Transport.ly</span>
                <span>An automated air freight scheduling service.</span>
                <span className={classes.buttonDiv}><Button clickHandler={BtnClickHandler} text={btnText} /></span>
            </div>

            {childComponent}
        </div>
    )
}

export default DaysComponent;