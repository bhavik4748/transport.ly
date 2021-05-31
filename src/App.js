import { useState, useEffect } from 'react';
import DaysComponent from './components/DaysComponent/DaysComponent';
import DataService from './services/DataService';

import './App.css';

function App() {
  const [flightsData, setFlightsData] = useState([]);
  const [flightsByDaysDetails, setFlightsByDaysDetails] = useState([]);
  const [orders, setOrders] = useState(new Map());

  useEffect(() => {
    async function getData() {
      const { flights, flightsByDays } = await DataService.getFlightsData();
      setFlightsData(flights);
      setFlightsByDaysDetails(flightsByDays);

    }
    getData();

    async function getOrders() {
      const orders = await DataService.getOrders();
      setOrders(orders);
      console.log({ orders });
    }
    getOrders();
  }, [setFlightsData, setOrders, setFlightsByDaysDetails]);



  return (
    <div className="App">
      <DaysComponent
        flightsData={flightsData}
        flightsByDaysDetails={flightsByDaysDetails}
        orders={orders} />
    </div>
  );
}

export default App;
