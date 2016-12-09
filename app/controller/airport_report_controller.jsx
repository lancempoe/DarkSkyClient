import React from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import Actions from '../actions/airport_hvac_actions.jsx';
import {Jumbotron, Row, button} from 'react-bootstrap';  // eslint-disable-line no-unused-vars
import AirportRows from './../components/airport_rows_component.jsx'; // eslint-disable-line no-unused-vars

const startOfJune = Moment.utc(["2016", "06", "01"])/1000;
const endOfJune = Moment.utc(["2016", "06", "30"])/1000;
const startOfJuly = Moment.utc(["2016","07","01"])/1000;
const endOfJuly = Moment.utc(["2016","07","31"])/1000;

class AnalysisComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Actions.getUpdatedAirportDate(startOfJune, endOfJune);
    }

    onJuneButtonClick() {
        Actions.getUpdatedAirportDate(startOfJune, endOfJune);
    }

    onJulyButtonClick() {
        Actions.getUpdatedAirportDate(startOfJuly, endOfJuly);
    }

    render(){
        return(
            <div style={{...styles.center}}>
                <Jumbotron style={{...styles.jumbo}} >
                    <Row >
                        <h1 style={{...styles.header}} className="text-center">Port of Portland HVAC Analyzer</h1>
                    </Row>
                    <Row>
                        <button
                            style={{...styles.button}}
                            onClick={this.onJuneButtonClick} className="text-center">Build June results</button>
                        <button
                            style={{...styles.button}}
                            onClick={this.onJulyButtonClick} className="text-center">Build July results</button>
                    </Row>
                </Jumbotron>

                <Row style={{...styles.body}}>
                    <AirportRows rows={this.props.data}/>
                </Row>
            </div>
        );
    }
}

const styles ={
    header: {
        fontSize: '36px'
    },
    jumbo:{
        color: '#1f352b',
        backgroundColor: 'darkseagreen',
        position: 'fixed',
        zIndex: '10',
        width: '100%',
        height: '170px',
        whiteSpace: 'nowrap'
    },
    center:{
        textAlign: 'center',
        margin:'auto'
    },
    button: {
        color: '#555555'
    },
    body:{
        paddingTop: '197px',
    }
};

const mapStateToProps = function(store) {
    return {
        data: store.hvacStore.data
    };
};

export default connect(mapStateToProps)(AnalysisComponent);
