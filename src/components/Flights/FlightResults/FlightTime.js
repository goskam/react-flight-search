import React from 'react'

const FlightTime = props => {

    let dateTimeObj = new Date(props.dateTime);
    let hours = dateTimeObj.getUTCHours();
    let minutes = dateTimeObj.getUTCMinutes();

    let month = dateTimeObj.getUTCMonth() + 1; //months from 1-12
    let day = dateTimeObj.getUTCDate();
    let year = dateTimeObj.getUTCFullYear();

    let newdate = day + " / " + month + " / " + year;

    return (<div>
        <p>Ugly format: {props.dateTime}</p>
        <p>Time: {hours}:{minutes}</p>
        <p>Date: {newdate}</p>



    </div>)

}

export default FlightTime;