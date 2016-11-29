const Dispatcher = require('../dispatchers/airport_hvac_dispatcher.jsx');
const EventEmitter = require('events').EventEmitter;
const Constants = require('../constants/airport_hvac_constants.jsx');
const assign = require('object-assign');

var CHANGE_EVENT = 'change';

var Data = [];

//Listeners
var AirportHvacStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    // Use Data in component
    getData: function() {
        return Data;
    }
});

//Process Actions
AirportHvacStore.dispatchToken = Dispatcher.register(function(payload){
    switch(payload.type){
        case Constants.GET_AIRPORT_HVAC_DATA:
            getData(payload.data);
            break;
    }

});

//Define Custom Actions
function getData(data){
    const startTime = data.startTime;
    const endTime = data.endTime;

    var promise = $.ajax({
        method: "POST",
        url: `http://localhost:8080/api/weather/airport?start_date=${startTime}&end_date=${endTime}`,
        dataType: 'json'
    });

    promise.then( function(response){
        Data = response;
        AirportHvacStore.emitChange();
    });
}

module.exports = AirportHvacStore;
