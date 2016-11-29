const Dispatcher = require('../dispatchers/airport_hvac_dispatcher.jsx');
const Constants = require('../constants/airport_hvac_constants.jsx');

var AirportHvacActions = {
  //Action Definition

  getUpdatedAirportDate(startTime, endTime) {
      Dispatcher.handleViewAction({
        type:Constants.GET,
        data: {startTime, endTime}
    });
  },
};

module.exports = AirportHvacActions;
