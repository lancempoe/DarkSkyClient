import constants from './action_constants.jsx';
import store from '../store.jsx';
import axios from 'axios';

const AirportHvacActions = {

    getUpdatedAirportDate(startTime, endTime) {
        axios
            .post(`http://localhost:8080/api/weather/airport?start_date=${startTime}&end_date=${endTime}`)
            .then(response => {
                store.dispatch({
                    type: constants.SET_AIRPORT_HVAC_DATA,
                    data: response.data
                });
            });
    }
};

export default AirportHvacActions;
