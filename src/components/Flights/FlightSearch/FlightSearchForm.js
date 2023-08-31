import React, {useState} from 'react'
import Card from '../../UI/Card'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import { DatePicker } from '@mui/x-date-pickers';
//import { LocalizationProvider } from '@mui/x-date-pickers';
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const FlightSearchForm = (props) => {
//test comment
    const [enteredDepartureAirport, setDepartureAirport] = useState('WAW');
    const [enteredArrivalAirport, setArrivalAirport] = useState('PMI');
    const [selectedDepartureDateFrom, setSelectedDepartureDateFrom] = useState('')
    const [selectedDepartureDateTo, setSelectedDepartureDateTo] = useState('')
    const [selectedReturnDateFrom, setSelectedReturnDateFrom] = useState('')
    const [selectedReturnDateTo, setSelectedReturnDateTo] = useState('')


    const DEPAirportChangeHandler = (event) => {
        setDepartureAirport(event.target.value);
    }

    const ARRAirportChangeHandler = (event) => {
        setArrivalAirport(event.target.value);
    }

    const DEPDateChangeHandlerFrom = (event) => {
        setSelectedDepartureDateFrom(event.target.value);
    }

    const DEPDateChangeHandlerTo = (event) => {
        setSelectedReturnDateFrom(event.target.value);
    }

    const RETDateChangeHandlerFrom = (event) => {
        setSelectedReturnDateTo(event.target.value);
    }

    const RETDateChangeHandlerTo = (event) => {
        setSelectedDepartureDateTo(event.target.value);
    }

    const kubasFunction = () => {
        //this has to be here, I will not remove it
        console.log('hello');
    }

    const flightSearchHandler = (event) => {
        event.preventDefault();
        console.log("--- Form submited, flightSearchHandler triggered")

        const params = {
            departureAirport: enteredDepartureAirport,
            arrivalAirport: enteredArrivalAirport,
            departureDateFrom: selectedDepartureDateFrom,
            departureDateTo: selectedDepartureDateTo

        }

        props.onSearchFlights(params);
        
    }


    const gosiasFunction = () => {
        console.log("gosia")
    }
    
    return (<Card>

            <div display="flex"> 
            <TextField id="fly_from" label="From" variant="outlined" value={enteredDepartureAirport} onChange={DEPAirportChangeHandler}/>
            <TextField id="fly_to" label="To" variant="outlined" value={enteredArrivalAirport} onChange={ARRAirportChangeHandler}/>
            </div>  
            One way, departure between:
            <div display="flex">
            <input type="date" style={{padding: `15px 20px`}} value={selectedDepartureDateFrom} onChange={DEPDateChangeHandlerFrom} />
            <input type="date" style={{padding: `15px 20px`}} value={selectedDepartureDateTo} onChange={DEPDateChangeHandlerTo} />
            </div>

            <Button onClick={flightSearchHandler} variant="contained" style={{padding: `15px 50px`}}>Search</Button>

        
    </Card>)
}

export default FlightSearchForm;