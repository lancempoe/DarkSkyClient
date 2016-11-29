const Store = require('../stores/airport_hvac_store.jsx');
const actions = require('../actions/airport_hvac_actions.jsx');
const AirportRows = require('./../components/airport_rows_component.jsx');

class AnalysisComponent extends React.Component{


    constructor(props) {
        super(props);
        $('body').css('backgroundColor','#1f352b');
        $('body').css('color','white');
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
        actions.getUpdatedAirportDate(startTime, endTime);
    }

    onJulyButtonClick() {
        const startTime = 1467356400;
        const endTime = 1470034799;
        actions.getUpdatedAirportDate(startTime, endTime);
    }

    render(){
        return(
            <div style={css(styles.center)}>
                <Jumbotron style={styles.jumbo} >
                    <Row >
                        <h1 className="text-center">Port of Portland HVAC Analyzer</h1>
                    </Row>
                    <Row>
                        <button style={css(styles.button)} onClick={this.onJuneButtonClick} className="text-center">Click for June results</button>
                        <button style={css(styles.button)} onClick={this.onJulyButtonClick} className="text-center">Click for July results</button>
                    </Row>
                </Jumbotron>

                <Row style={css(styles.body)}>
                    <hr />
                    <AirportRows rows={this.state.data}/>
                </Row>
            </div>
        )
    }
};

var styles ={
    jumbo:{
        color: '#1f352b',
        position: 'fixed',
        zIndex: '10',
        width: '100%',
        height: '170px'
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
