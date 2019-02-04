import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// actions
// import {addTask} from '../actions/task';
// import {removeTask} from '../actions/task';
// import {editTask} from '../actions/task';
// import {saveTask} from '../actions/task';
import * as tasksAction from '../actions/task'

class TaskList extends Component {
    constructor(props) {
      super(props);
      console.log(this.props)
      this.editTask = React.createRef();
      this.newTask = React.createRef();
    }
  
  render () {

    const addTask = () => {
        let input = this.newTask.current;
        return this.props.tasksAction.addTask(input);
    }

    const removeTask = (task) => {
        return this.props.tasksAction.removeTask(task);
    }

    const editTask = (index) => {
        return this.props.tasksAction.editTask(index);
    }

    const saveTask = (index) => {
        return this.props.tasksAction.saveTask(index);
    }

    return <div>

        { 
            this.props.tasks.map(function(task, index) {

                if(task.edit == true) {
                    return ( 
                        <div key={index} className="col-sm-12">
                            <div className="panel panel-primary">
                                <div className="panel-body">
                                    <textarea id={'edit_task' + index} defaultValue={task.name} className="width100"></textarea>
                                    <button onClick={() => saveTask(index)} className="btn btn-margin btn-success">Save</button>
                                </div>
                            </div>
                        </div>
                    );
                }

                return ( 
                    <div key={index} className="col-sm-12">
                        <div className="panel panel-primary">
                            <div className="panel-body">
                                <h4>{task.name}</h4>
                                <button onClick={() => removeTask(task)} className="btn btn-margin btn-danger">Remove</button>
                                
                                <button onClick={() => editTask(index)} className="btn btn-margin btn-primary">Edit</button>
                            </div>
                        </div>
                    </div>
                );
            }, this)
        }

        <input id="new-task" type="text" defaultValue="New Task" ref={this.newTask}></input>
        <button className="btn btn-success" onClick={() => addTask()}>Add Todo</button>

    </div>
    

  }
}

// const mapDispatchToProps = function(dispatch) {
//     return bindActionCreators({ 
//         addTask: addTask,
//         removeTask: removeTask,
//         editTask: editTask,
//         saveTask: saveTask
//     }, dispatch);
// }

function mapDispatchToProps(dispatch) {
    return {
        tasksAction: bindActionCreators(tasksAction, dispatch)
    }
}

const mapStateToProps = function(state){
    return {
      tasks: state.task,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);