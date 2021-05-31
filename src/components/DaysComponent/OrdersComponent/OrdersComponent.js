
import classes from './OrdersComponent.module.css';
function OrderComponent({ orderFlightArr }) {
    let dataTable = null;
    dataTable = orderFlightArr.map(x => {
        return (
            <div key={x.order} className={classes.parentDiv}>
                <div className={classes.order}>{x.order}</div>
                <div className={classes.flight}>{x.flight}</div>
                <div className={classes.departure}>{x.departure_city}</div>
                <div className={classes.arrival}>{x.arrival_city}</div>
                <div className={classes.day}>{x.day}</div>
            </div>
        )
    })
    return (
        <div className={classes.main}>
            <div className={classes.orderLabel}>Orders</div>
            <div className={[classes.parentDiv, classes.header].join(' ')}>
                <div className={classes.order}>Order</div>
                <div className={classes.flight}>Flight</div>
                <div className={classes.departure}>Departure</div>
                <div className={classes.arrival}>Arrival</div>
                <div className={classes.day}>Day</div>
            </div>
            {dataTable}
        </div>
    )
}

export default OrderComponent;