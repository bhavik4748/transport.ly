
import classes from './OrdersComponent.module.css';
function OrderComponent({ orderFlightArr }) {
    let dataTable = null;
    dataTable = orderFlightArr.map(x => {
        return (
            <div key={x.order} className={classes.parentDiv}>
                <div>{x.order}</div>
                <div>{x.flight}</div>
                <div>{x.departure_city}</div>
                <div>{x.arrival_city}</div>
                <div>{x.day}</div>
            </div>
        )
    })
    return (
        <div className={classes.main}>
            <div className={classes.orderLabel}>Orders</div>
            <div className={[classes.parentDiv, classes.header].join(' ')}>
                <div>Order</div>
                <div>Flight</div>
                <div>Departure</div>
                <div>Arrival</div>
                <div>Day</div>
            </div>
            {dataTable}
        </div>
    )
}

export default OrderComponent;