import { sortFlightsByDay } from './Utils';

const DataService = {}

DataService.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

DataService.getFlightsData = async () => {
    try {
        const res = await fetch('flights.json', DataService.headers);
        const result = await res.json();
        result['flightsByDays'] = sortFlightsByDay(result.flights);
        return result;
    } catch (e) {
        console.error(e);
    }
}

DataService.getOrders = async () => {
    try {
        const res = await fetch('orders.json', DataService.headers);
        const result = await res.json();
        return result;
    } catch (e) {
        console.error(e);
    }
}

export default DataService;