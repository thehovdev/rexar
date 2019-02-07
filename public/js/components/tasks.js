import React, {Component} from 'react';

// containers
import TaskList from '../containers/task-list';

class TaskComponent extends Component {
    render () {
        return <div className="task-parent">
                    <TaskList />
                </div>
    }
}

export default TaskComponent;