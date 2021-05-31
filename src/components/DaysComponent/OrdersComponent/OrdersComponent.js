import classes from './OrdersComponent.module.css';
function OrderComponent({ }) {
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
        </div>
    )
}

export default OrderComponent;