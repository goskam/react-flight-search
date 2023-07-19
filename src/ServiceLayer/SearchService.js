class SearchService {

    search = async (departureAirport, arrivalAirport, departureDateFrom, departureDateTo) => {
        const options = {
            method: 'GET',
            headers: {
                "accept": "application/json",
                "apikey": "5xPTuuSyI7SiahzNlM4oAKKQJW8Ji731"
            }
        };

        //let flyFrom = "NRN"
        //let flyTo = "PMI"
        //let dateFrom = "15%2F06%2F2023"
        //let dateTo = "05%2F07%2F2023"
        let curr = "PLN"
        let direct = 0
        let adults = 1

        console.log("DEP DATE TEST, what is the format? -- " + departureDateFrom)

        const response = await fetch("https://api.tequila.kiwi.com/v2/search?" +
            "fly_from=" + departureAirport +
            "&fly_to=" + arrivalAirport +
            "&date_from=" + departureDateFrom +
            "&date_to=" + departureDateTo +
            "&curr=" + curr +
            "&max_stopovers=" + direct +
            "&adults=" + adults
            //+ "&nights_in_dst_from=2&nights_in_dst_to=3&max_fly_duration=20&flight_type=round&ret_from_diff_city=true&ret_to_diff_city=true&one_for_city=0&one_per_date=0&adults=2&children=2&selected_cabins=C&mix_with_cabins=M&adult_hold_bag=1%2C0&adult_hand_bag=1%2C1&child_hold_bag=2%2C1&child_hand_bag=1%2C1&only_working_days=false&only_weekends=false&partner_market=us&max_stopovers=2&max_sector_stopovers=2&vehicle_type=aircraft&limit=500"
            , options);
        // .then(response => response.json())
        //.then(response => {

        const responseJson = await response.json();
        
        const flightsData = responseJson.data?.map((flightData) => {
            return {
                key: flightData.id,
                depTime: flightData.local_departure,
                arrTime: flightData.local_arrival,
                price: flightData.price,
                airlines: flightData.airlines
            };
        });
        return flightsData;

        // const flightsData = responseJson && responseJson.data && Array.isArray(responseJson.data)
        // ? responseJson.data.map((flightData) => {
        //     return {
        //         key: flightData.id,
        //         depTime: flightData.local_departure,
        //         arrTime: flightData.local_arrival,
        //         price: flightData.price,
        //         airlines: flightData.airlines
        //     };
        // })
        // : [];
    
    return flightsData;

    }


    
}

export const searchservice = new SearchService();