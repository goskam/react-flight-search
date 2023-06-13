import React from 'react'
import FlightItem from './FlightItem'


const FlightList = (props) => {



    return(<ul>
        {props.flights.map((flight) => (
            <FlightItem 
                key={flight.key}
                depTime={flight.depTime}
                arrTime={flight.arrTime}
                price={flight.price}
                airlines={flight.airlines}
            />
        ))}
    </ul>)
}

export default FlightList;