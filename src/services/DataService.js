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
        console.log({result});
        return result;
    } catch (e) {
        console.error(e);
    }
}

DataService.getOrders = async()=>{
    try{
        const res = await fetch('orders.json', DataService.headers);
        const result = await res.json();
        let map = new Map();
        for(const property in result){
           let c =  map.has(result[property]['destination'])?map.get(result[property]['destination']): [];
          // console.log(c);
           c.push(property);
           map.set(result[property]['destination'], c);
        }
        console.log({ map });
        return map;
    }catch(e){
        console.error(e);
    }
}

function sortFlightsByDay(flights) {
    let days = new Array(2).fill([]);
    for(let x of flights){
        const t = [...days[x.day - 1]];
        t.push(x);
        days[x.day - 1 ] = [...t];
    }
    return days;
}

export default DataService;