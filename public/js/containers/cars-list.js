import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectCar} from '../actions/selectCar';
import {deleteCar} from '../actions/deleteCar';
import {addCar} from '../actions/addCar';

class CarsList extends Component {

    showList() {

        console.log(this.props.cars);

        let selectCar = this.props.selectCar;

        return this.props.cars.map(function(car) {

            return (
                    <li key={car.id}>
                        <h3 className="car-name">
                          {car.name}
                        </h3>
                    </li>
            );
        });
    }

    render () {
        return <div className="main">
            <ul>{this.showList()}</ul>
            <input id="new-task" type="text" defaultValue="Send sms"></input>
            <button className="btn btn-sm btn-primary smargin btn-add-car" onClick={ this.props.addCar }>Add</button>
        </div>
    }

}

function mapStateToProps(state) {
    return {
        cars: state.cars
    };
}

function matchDispatchToProps(dispatch) {
    
    return bindActionCreators({
        selectCar: selectCar,
        deleteCar: deleteCar,
        addCar: addCar
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CarsList);