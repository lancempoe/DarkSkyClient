var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AirportHvacDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(payload) {
    console.log("i'm in the dispaceher with type of " + payload.type);

    this.dispatch(payload)
  }
});

module.exports = AirportHvacDispatcher;
