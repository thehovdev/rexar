import React, {Component} from 'react';
import CarsList from '../containers/cars-list';

class CarsComponent extends Component {

    render () {
        return <div className="main">
            <ul>
                <CarsList />
            </ul>
        </div>
    }

}

export default CarsComponent;