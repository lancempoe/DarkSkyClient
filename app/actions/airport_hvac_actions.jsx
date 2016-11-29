const Dispatcher = require('../dispatchers/airport_hvac_dispatcher.js');
const Constants = require('../constants/airport_hvac_constants.js');

var AirportHvacActions = {
  //Action Definition

  getUpdatedAirportDate: function(){
      console.log("Action called with type of : " + Constants.GET);

      Dispatcher.handleViewAction({
        type:Constants.GET
      //Additional Arguments
    });
  },

  // set: function(){
  //   Dispatcher.handleViewAction({
  //     type:Constants.SET
  //     //Additional Arguments
  //   });
  // }
};

module.exports = AirportHvacActions;
