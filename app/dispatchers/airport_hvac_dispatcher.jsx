const Dispatcher = require('flux').Dispatcher;
const assign = require('object-assign');

const AirportHvacDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(payload) {
    this.dispatch(payload)
  }
});

module.exports = AirportHvacDispatcher;
