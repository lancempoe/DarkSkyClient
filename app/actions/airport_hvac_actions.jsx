const Dispatcher = require('../dispatchers/airport_hvac_dispatcher.js');
const Constants = require('../constants/airport_hvac_constants.js');

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
