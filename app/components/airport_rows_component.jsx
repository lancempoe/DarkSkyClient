import AirportRow from './airport_row_component.jsx'; // eslint-disable-line no-unused-vars
import Moment from 'moment';
import _ from 'lodash';
import React from 'react';

class AirportResultsComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div style={{...styles.container}} >
                <table style={{...styles.table}} >
                    <tbody>
                        <tr>
                            <td style={{...styles.header}} >Day         </td>
                            <td style={{...styles.header}} >Cooling Used</td>
                            <td style={{...styles.header}} >Heating Used</td>
                        </tr>
                        {getRows(this.props.rows)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function getRows(rows) {
    const airportRows = [];
    rows.forEach(row => {
        airportRows.push(
            <AirportRow key={_.uniqueId('row_')}
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
        paddingBottom:'30px',
        align: 'center'
    }
};

export default AirportResultsComponent;
