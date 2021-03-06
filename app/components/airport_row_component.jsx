import React from 'react';

class AirportRowComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <tr style={{...styles.row}}>
                <td>{this.props.day}</td>
                <td>{this.props.coolingUsed}</td>
                <td>{this.props.heatingUsed}</td>
            </tr>
        );
    }
}

const styles ={
    row:{
        border: '1px solid black'
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

export default AirportRowComponent;
