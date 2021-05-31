

const ordersFlights = (orders, flights) => {
    let flightsMap = getFlightMap(flights);
    let orderFlightArr = [];
    for (const property in orders) {
        if (flightsMap.has(orders[property]['destination'])) {
            let flightArr = flightsMap.get(orders[property]['destination']);
            if (flightArr.length > 0 && flightArr[0]['remCap'] > 0) {
                orderFlightArr.push({
                    'order': property,
                    'flight': flightArr[0]['flight_number'],
                    'departure_city': 'YUL',
                    'arrival_city': orders[property]['destination'],
                    'day': flightArr[0]['day']
                })
                if (flightArr[0]['remCap'] === 1)
                    flightArr.shift();
                else
                    --flightArr[0]['remCap'];
                flightsMap.set(orders[property]['destination'], flightArr);
            }
        }
    }
    return orderFlightArr;
}

const getFlightMap = (flights) => {
    //sort by days
    flights.sort((a, b) => a.day - b.day);
    let map = new Map();
    for (let x of flights) {
        let arr = map.has(x['arrival_city']) ? map.get(x['arrival_city']) : [];
        x['remCap'] = 20;
        arr.push(x);
        map.set(x['arrival_city'], arr);
    }
    return map;
}

export { ordersFlights }