// var Constants = require('../constants/airport_results_component_constants');
// var Store = require('../stores/airport_results_component_store');
// var Actions = require('../actions/airport_results_component_actions');
const AirportRow = require('./airport_row_component.jsx');
const Moment = require('moment');

class AirportResultsComponent extends React.Component{
  constructor(props) {
    super(props);
    // this.state = {data: []};
  }

  componentWillMount() {
      //Event Listener    
     //Store.addChangeListener(this.onChange);
  }

  //Callback On Change
  onChange() {
   //this.setState({
     //data: Store.getData()
   //});
  }
  render(){
    return(
      <div>
            <table>
                <tr>
                    <td>Day</td>
                    <td>Cooling Used</td>
                    <td>Heating Used</td>
                </tr>
                {getRows(this.props.rows)}
            </table>
      </div>
    )
  }
};

function getRows(rows) {
    let airportRows = [];
    rows.forEach(row => {
        airportRows.push(
            <AirportRow
                day={Moment.unix(row.day).format("MM/DD/YYYY")}
                coolingUsed={row.coolingUsed ? "Yes":"No"}
                heatingUsed={row.heatingUsed ? "Yes":"No"}/>
        );
    });
    return airportRows;
}

AirportResultsComponent.defaultProps = {
    rows: []
};

AirportResultsComponent.propTypes = {
    rows: React.PropTypes.array
};

module.exports = AirportResultsComponent;
