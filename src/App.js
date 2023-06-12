import React, { useState } from 'react' 
import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header'
import FlightCard from './components/UI/FlightCard'
import FlightSearchForm from './components/Flights/FlightSearch/FlightSearchForm'
import FlightResults from './components/Flights/FlightResults/FlightResults'


function App() {

  const [searchDetails, setSearchDetails] = useState([])

  const updateSearchHandler = (flight) => {
    console.log("from App.js -- flight DEP: " + flight.departureAirport + ", flight ARR: " + flight.arrivalAirport)

    setSearchDetails(flight);
  }


  return (
    <div className="App">
      <Header />
    <FlightSearchForm onSearchFlights={updateSearchHandler}/>
    <FlightResults params={searchDetails}/>
    </div>
  );
}

export default App;
