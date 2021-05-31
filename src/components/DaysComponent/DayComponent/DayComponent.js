import classes from './DayComponent.module.css';

function DayComponent({ flights, day }) {
    let flightDetails = null;
    let flightLastIndex = flights.length - 1;
    flightDetails = flights.map((x, index) => {
        let classComb =  [classes.parentDiv, (flightLastIndex === index) ? classes.lastRow : ' '].join(' ')
        return (
            <div className={classComb} key={x.flight_number}>
                <div>{x.flight_number}</div>
                <div>{x.departure_city}</div>
                <div>{x.arrival_city}</div>
            </div>
        )
    })

    return (
        <div className={classes.main}>
            <div className={classes.dayLabel}>Scheduled flights for day {day + 1}</div>
            <div className={[classes.parentDiv, classes.header].join(' ')}>
                <div>Flight</div>
                <div>Departure</div>
                <div>Arrival</div>
            </div>
            {flightDetails}
        </div>
    )
}

export default DayComponent;