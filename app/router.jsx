import React from 'react'; // eslint-disable-line no-unused-vars
import { Router, Route, browserHistory, IndexRoute } from 'react-router'; // eslint-disable-line no-unused-vars
import AirportReportController from './controller/airport_report_controller.jsx';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={AirportReportController}>
            <IndexRoute component={AirportReportController} />
        </Route>
    </Router>
);