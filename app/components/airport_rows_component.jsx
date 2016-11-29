/* global React, css */

import AirportRow from './airport_row_component.jsx'; // eslint-disable-line no-unused-vars
import Moment from 'moment';

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
        );
    }
}

function getRows(rows) {
    const airportRows = [];
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

const styles = {
    header: {
        width: "15%",
        fontWeight: 'bold'
    },
    container: {
        textAlign: 'center',
        padding: '5px'
    },
    table: {
        border: '1px solid black',
        margin: '0 auto',
        backgroundColor: 'white',
        color: 'black',
        paddingBottom:'30px'
    }
};

module.exports = AirportResultsComponent;
