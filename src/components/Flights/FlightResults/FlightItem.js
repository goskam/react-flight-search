import React from 'react'
import Card from '../../UI/Card'

const FlightItem = (props) => {

    return (<Card>
        <p>Airline: {props.airlines}</p>
       
            <h2>Departure time: {props.depTime}</h2>
            <h2>Arrival time: {props.arrTime}</h2>
            <p>Price: {props.price} PLN</p>
     
    </Card>)
}

export default FlightItem;