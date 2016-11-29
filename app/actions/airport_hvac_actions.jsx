import Dispatcher from '../dispatchers/airport_hvac_dispatcher.jsx';
import Constants from '../constants/airport_hvac_constants.jsx';

const AirportHvacActions = {

    getUpdatedAirportDate(startTime, endTime) {
        Dispatcher.handleViewAction({
            type:Constants.GET_AIRPORT_HVAC_DATA,
            data: {startTime, endTime}
        });
    },
};

module.exports = AirportHvacActions;
