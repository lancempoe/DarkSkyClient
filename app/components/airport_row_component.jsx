// var Constants = require('../constants/airport_row_component_constants');
// var Store = require('../stores/airport_row_component_store');
// var Actions = require('../actions/airport_row_component_actions');

class AirportRowComponent extends React.Component{
    constructor(props) {
        super(props);
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
        return (
            <tr>
                <td>{this.props.day}</td>
                <td>{this.props.coolingUsed}</td>
                <td>{this.props.heatingUsed}</td>
            </tr>
        );
    }
};
//Inline CSS Styles(excludes hover)
var styles ={
    base:{

    }
};

AirportRowComponent.defaultProps = {
    day: undefined,
    coolingUsed: false,
    heatingUsed: false
};

AirportRowComponent.propTypes = {
    results: React.PropTypes.object
};

module.exports = AirportRowComponent;
