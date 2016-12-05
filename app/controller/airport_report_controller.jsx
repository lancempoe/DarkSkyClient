/* global React, css */

import Store from '../stores/airport_hvac_store.jsx';
import Actions from '../actions/airport_hvac_actions.jsx';
import AirportRows from './../components/airport_rows_component.jsx'; // eslint-disable-line no-unused-vars

class AnalysisComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {data: []};
    }
    componentWillMount() {
        Store.addChangeListener(this.onChange.bind(this));
    }

    onChange() {
        this.setState({
            data: Store.getData()
        });
    }

    onJuneButtonClick() {
        const startTime = 1464764400;
        const endTime = 1467356399;
        Actions.getUpdatedAirportDate(startTime, endTime);
    }

    onJulyButtonClick() {
        const startTime = 1467356400;
        const endTime = 1470034799;
        Actions.getUpdatedAirportDate(startTime, endTime);
    }

    render(){
        return(
            <div style={css(styles.center)}>
                <Jumbotron style={styles.jumbo} >
                    <Row >
                        <h1 style={css(styles.header)} className="text-center">Port of Portland HVAC Analyzer</h1>
                    </Row>
                    <Row>
                        <button
                            style={css(styles.button)}
                            onClick={this.onJuneButtonClick} className="text-center">Build June results</button>
                        <button
                            style={css(styles.button)}
                            onClick={this.onJulyButtonClick} className="text-center">Build July results</button>
                    </Row>
                </Jumbotron>

                <Row style={css(styles.body)}>
                    <AirportRows rows={this.state.data}/>
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

module.exports = AnalysisComponent;
