// var Constants = require('../constants/analysis_component.jsx_constants');
// var Store = require('../stores/analysis_component.jsx_store');
// var Actions = require('../actions/analysis_component.jsx_actions');
const AirportRows = require('./../components/airport_rows_component.jsx');

class AnalysisComponent extends React.Component{


  constructor(props) {
    super(props);
    $('body').css('backgroundColor','#1f352b');
    $('body').css('color','white');
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
            <Jumbotron style={styles.jumbo}>
                <Row style={styles.row}>
                  <h1 className="text-center">Airport HVAC Analysis Tool</h1>
                </Row>
            </Jumbotron>
            <Row  style={css(styles.body,styles.row)}>
                <h1 className="text-center">I will put my calendar selectors here</h1>
                <hr />
                <AirportRows rows={sampleData}/>
            </Row>
      </div>
    )
  }
};

const sampleData =
    [
        {
            "day": 1480147200,
            "coolingUsed": false,
            "heatingUsed": true
        },
        {
            "day": 1480233600,
            "coolingUsed": false,
            "heatingUsed": true
        }
    ];

var styles ={
    jumbo:{
        color: '#1f352b',
        position: 'fixed',
        zIndex: '10',
        width: '100%'
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
