import Constants from '../actions/action_constants.jsx';

const initialState = {
    data: []
};

const reducer = function(state = initialState, action) {
    switch (action.type) {
        case Constants.SET_AIRPORT_HVAC_DATA:
            return { ...state, data: action.data };
        default:
            return state;
    }
};

export default reducer;
