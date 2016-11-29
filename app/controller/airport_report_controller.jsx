const Store = require('../stores/airport_hvac_store.jsx');
const actions = require('../actions/airport_hvac_actions.jsx');
const AirportRows = require('./../components/airport_rows_component.jsx');
const Moment = require('moment');

class AnalysisComponent extends React.Component{


  constructor(props) {
    super(props);
    $('body').css('backgroundColor','#1f352b');
    $('body').css('color','white');
      this.state = {data: []};
  }
  componentWillMount() {
      //Event Listener    
     Store.addChangeListener(this.onChange.bind(this));
  }

  //Callback On Change
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
            <Jumbotron style={styles.jumbo}>
                <Row style={styles.row}>
                  <h1 className="text-center">Airport HVAC Analysis Tool</h1>
                </Row>
            </Jumbotron>

            <Row style={css(styles.body)}>
                <button style={css(styles.button)} onClick={this.onJuneButtonClick} className="text-center">Click for June results</button>
                <button style={css(styles.button)} onClick={this.onJulyButtonClick} className="text-center">Click for July results</button>
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
        width: '100%'
    },
    center:{
        textAlign: 'center',
        margin:'auto'
    },
    button: {
        color: '#555555'
    },
    row:{
        marginLeft: '0px',
        marginRight: '0px'
    },
    body:{
        paddingTop: '197px',
    },
    display:{
        backgroundColor: '#a4a4a4',
        color: '#1f352b',
        paddingBottom:'30px'
    },
    code:{
        backgroundColor: '#71907b',
        marginRight:'5px',
        marginLeft:'5px'
    }

}

module.exports = AnalysisComponent;
