import React, {useState} from 'react'
import Card from '../../UI/Card'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function searchFlight() {

    const options = {
      method: 'GET',
      headers: {
        "accept": "application/json",
         "apikey": "5xPTuuSyI7SiahzNlM4oAKKQJW8Ji731"

      }
    };

    let flyFrom = "NRN"
    let flyTo = "PMI"
    let dateFrom = "27%2F06%2F2023"
    let dateTo = "27%2F06%2F2023"
    let curr = "PLN"
    let direct = 0
    let adults = 1

    
    fetch("https://api.tequila.kiwi.com/v2/search?"+ 
    "fly_from=" + flyFrom + 
    "&fly_to=" + flyTo + 
    "&date_from="+ dateFrom + 
    "&date_to=" + dateTo +
    "&curr=" + curr +
    "&max_stopovers=" + direct +
    "&adults=" + adults
    //+ "&nights_in_dst_from=2&nights_in_dst_to=3&max_fly_duration=20&flight_type=round&ret_from_diff_city=true&ret_to_diff_city=true&one_for_city=0&one_per_date=0&adults=2&children=2&selected_cabins=C&mix_with_cabins=M&adult_hold_bag=1%2C0&adult_hand_bag=1%2C1&child_hold_bag=2%2C1&child_hand_bag=1%2C1&only_working_days=false&only_weekends=false&partner_market=us&max_stopovers=2&max_sector_stopovers=2&vehicle_type=aircraft&limit=500"
    , options)
      .then(response => response.json())
      .then(response => {
        console.log(response)

        for (let i = 0; i < response.data.length; i++)  {

            console.log("DEP: " + response.data[i].local_departure + ", ARR: " + response.data[i].local_arrival + ", PRICE: " + response.data[i].price + " " + curr)

		}


      })
      .catch(error => console.log('error', error));

}


const FlightSearchForm = (props) => {

    const [enteredDepartureAirport, setDepartureAirport] = useState('Warszawa');
    const [enteredArrivalAirport, setArrivalAirport] = useState('Poznan');
    const [selectedDepartureDate, setSelectedDepartureDate] = useState('')

    const DEPAirportChangeHandler = (event) => {
        setDepartureAirport(event.target.value);
    }

    const ARRAirportChangeHandler = (event) => {
        setArrivalAirport(event.target.value);
    }

    const DEPDateChangeHandler = (event) => {
        setSelectedDepartureDate(event.target.value);
    }

    const flightSearchHandler = (event) => {
        event.preventDefault();
        console.log("--- Form submited, flightSearchHandler triggered")

        const params = {
            departureAirport: enteredDepartureAirport,
            arrivalAirport: enteredArrivalAirport,
            departureDate: selectedDepartureDate
        }

        props.onSearchFlights(params);
        
    }

    return (<Card>
        <form onSubmit={flightSearchHandler} display="flex">        
            <TextField id="fly_from" label="From" variant="outlined" value={enteredDepartureAirport} onChange={DEPAirportChangeHandler}/>
            <TextField id="fly_to" label="To" variant="outlined" value={enteredArrivalAirport} onChange={ARRAirportChangeHandler}/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker id="departure_date" label="Date" value={selectedDepartureDate} onChange={DEPDateChangeHandler} />
            </LocalizationProvider>
            <Button type="submit" variant="contained" onClick={searchFlight}>Search</Button>
        </form>
    </Card>)
}

export default FlightSearchForm;