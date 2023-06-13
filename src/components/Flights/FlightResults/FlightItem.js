import React from 'react'
import Card from '../../UI/Card'
import FlightTime from './FlightTime'

const FlightItem = (props) => {

    return (<Card>
        <p>Airline: {props.airlines}</p>
       
            <h2>Departure time:</h2>
            <FlightTime dateTime={props.depTime}/>

            <h2>Arrival time:</h2>
            <FlightTime dateTime={props.arrTime}/>

            <p>Price: {props.price} PLN</p>

     
    </Card>)
}

export default FlightItem;