import React from 'react'
import Card from '../../UI/Card'
import FlightItem from './FlightItem'


const FlightResults = (props) => {

    console.log("From FlightResults Compontent")
    console.log("DEP Airport ---" + props.params.departureAirport)
    console.log("ARR Airport ---" + props.params.arrivalAirport)


    return (<Card>
        <FlightItem />
    </Card>)
}

export default FlightResults;