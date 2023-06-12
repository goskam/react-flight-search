import React, { useEffect } from 'react'
import Card from '../../UI/Card'
import FlightItem from './FlightItem'


const FlightResults = (props) => {

    console.log("From FlightResults Compontent")
    console.log("DEP Airport ---" + props.params.departureAirport)
    console.log("ARR Airport ---" + props.params.arrivalAirport)


    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              "accept": "application/json",
               "apikey": "5xPTuuSyI7SiahzNlM4oAKKQJW8Ji731"
            }
          };
      
          //let flyFrom = "NRN"
          //let flyTo = "PMI"
          let dateFrom = "27%2F06%2F2023"
          let dateTo = "27%2F07%2F2023"
          let curr = "PLN"
          let direct = 0
          let adults = 1
      
          
          fetch("https://api.tequila.kiwi.com/v2/search?"+ 
          "fly_from=" + props.params.departureAirport + 
          "&fly_to=" + props.params.arrivalAirport + 
          "&date_from="+ dateFrom + 
          "&date_to=" + dateTo +
          "&curr=" + curr +
          "&max_stopovers=" + direct +
          "&adults=" + adults
          //+ "&nights_in_dst_from=2&nights_in_dst_to=3&max_fly_duration=20&flight_type=round&ret_from_diff_city=true&ret_to_diff_city=true&one_for_city=0&one_per_date=0&adults=2&children=2&selected_cabins=C&mix_with_cabins=M&adult_hold_bag=1%2C0&adult_hand_bag=1%2C1&child_hold_bag=2%2C1&child_hand_bag=1%2C1&only_working_days=false&only_weekends=false&partner_market=us&max_stopovers=2&max_sector_stopovers=2&vehicle_type=aircraft&limit=500"
          , options)
            .then(response => response.json())
            .then(response => {
              console.log("* * * response inside of fetch" + response)
            console.log('* * * from inside of fetch')
            console.log("* * * DEP: " + response.data[0].local_departure + ", ARR: " + response.data[0].local_arrival + ", PRICE: " + response.data[0].price + " " + curr)

            //   for (let i = 0; i < response.data.length; i++)  {
            //       console.log("DEP: " + response.data[i].local_departure + ", ARR: " + response.data[i].local_arrival + ", PRICE: " + response.data[i].price + " " + curr)
            //   }
      
      
            })
            .catch(error => console.log('error', error));
    }, [props.params.departureAirport, props.params.arrivalAirport])


    return (<Card>
        <FlightItem />
    </Card>)
}

export default FlightResults;

