import { useState, useEffect } from 'react';
import DaysComponent from './components/DaysComponent/DaysComponent';
import DataService from './services/DataService';

import './App.css';

function App() {
  const [flightsData, setFlightsData] = useState([]);
  const [flightsByDaysDetails, setFlightsByDaysDetails] = useState([]);
  const [orders, setOrders] = useState();

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
    }
    getOrders();
  }, [setFlightsData, setOrders, setFlightsByDaysDetails]);

  let daysComponent = null;
  if (flightsData.length && orders) {
    daysComponent = (<DaysComponent
      flightsData={flightsData}
      flightsByDaysDetails={flightsByDaysDetails}
      orders={orders} />)
  }

  return (
    <div className="App">
      {daysComponent}
    </div>
  );
}

export default App;
