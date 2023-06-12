import React from 'react'
import Card from '../../UI/Card'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function searchFlight() {

    // let baseURL = 'https://api.skypicker.com/v2/search/?flyFrom=PRG&to=LGQ&dateFrom=01/06/2023&dateTo=31/06/2023'

    // const options = {
    //     method: 'GET',
    //     'mode': 'cors',

    //     headers: {
    //         'Content-Type': 'application/json',
    //         "apikey": "o6EdCVIO3F7bVpUQmpELY7Cgplmg_jbQ"

    //     }
    // }

    // fetch(baseURL, options)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log(response)


    //     })
    //     .catch(error => console.log('error', error));



   
    const options = {
      method: 'GET',
      headers: {
        "accept": "application/json",
        //"apikey": "5xPTuuSyI7SiahzNlM4oAKKQJW8Ji731"
         "apikey": "o6EdCVIO3F7bVpUQmpELY7Cgplmg_jbQ"

      }
    };
    
    fetch("https://api.tequila.kiwi.com/v2/search?fly_from=FRA&fly_to=PRG&date_from=07%2F07%2F2023&date_to=17%2F07%2F2023&nights_in_dst_from=2&nights_in_dst_to=3&max_fly_duration=20&flight_type=round&ret_from_diff_city=true&ret_to_diff_city=true&one_for_city=0&one_per_date=0&adults=2&children=2&selected_cabins=C&mix_with_cabins=M&adult_hold_bag=1%2C0&adult_hand_bag=1%2C1&child_hold_bag=2%2C1&child_hand_bag=1%2C1&only_working_days=false&only_weekends=false&partner_market=us&max_stopovers=2&max_sector_stopovers=2&vehicle_type=aircraft&limit=500", options)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

}

const FlightSearchForm = () => {



    return (<Card>
        <TextField id="outlined-basic" label="Destination" variant="outlined" />
        <Button variant="contained" onClick={searchFlight}>Search</Button>

    </Card>)
}

export default FlightSearchForm;