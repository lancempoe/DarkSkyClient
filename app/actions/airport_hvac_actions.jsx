const Dispatcher = require('../dispatchers/airport_hvac_dispatcher.jsx');
const Constants = require('../constants/airport_hvac_constants.jsx');

const AirportHvacActions = {

    getUpdatedAirportDate(startTime, endTime) {
        Dispatcher.handleViewAction({
            type:Constants.GET_AIRPORT_HVAC_DATA,
            data: {startTime, endTime}
        });
    },
};

module.exports = AirportHvacActions;
