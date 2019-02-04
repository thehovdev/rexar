import React, {Component} from 'react';
import {connect} from 'react-redux';

class CarsDetail extends Component {

    render () {
        if(!this.props.car) {
            return <div></div>;
        }
        return <div key={this.props.car.id}>
                    <h2>Марка : {this.props.car.name}</h2>
                    <h3>Скорость : {this.props.car.speed}</h3>
               </div>
    }

}

function mapStateToProps(state) {
    return {
        car: state.active
    };
}


export default connect(mapStateToProps)(CarsDetail);