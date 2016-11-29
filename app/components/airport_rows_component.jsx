const AirportRow = require('./airport_row_component.jsx');
const Moment = require('moment');

class AirportResultsComponent extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div style={css(styles.container)} >
            <table align="center" style={css(styles.table)} >
                <tr>
                    <td style={css(styles.header)} >Day         </td>
                    <td style={css(styles.header)} >Cooling Used</td>
                    <td style={css(styles.header)} >Heating Used</td>
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

var styles = {
    header: {
        width: "15%"
    },
    container: {
        textAlign: 'center',
        border: '1px solid green',
        padding: '5px'
    },
    table: {
        border: '1px solid red',
        margin: '0 auto'
    /* You can also uncomment this and remove the align="center" attribute
     */
    }
};

module.exports = AirportResultsComponent;
