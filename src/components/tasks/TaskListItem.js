import React, { Component } from 'react';

class TaskListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: this.props.item.task,
      showTask: true,
    }

    this.onClickDone = this.onClickDone.bind(this);
    this.handleEditTaskName = this.handleEditTaskName.bind(this);
  }

  onClickDone() {
    let index = parseInt(this.props.index, 10);
    this.props.markTodoDone(index);
  }

  handleEditTaskName(itemIndex) {
    let newTaskName  = prompt('Enter the task', 'New task name');
    let taskList = this.state.taskList;

    if (newTaskName) {
      this.props.item.value = newTaskName;;
      this.setState({ taskList: taskList });
    }
  }

  render () {
    let todoClass = this.props.item.done ?
        'done' : 'undone';

    return (
      <li className="list-group-item">
        <div className={todoClass}>
          <input
            type="checkbox"
            checked={this.props.item.done}
            onChange={this.onClickDone}
          />
          {this.props.item.value}
          <button
            type="button"
            className="close"
            onClick={this.handleEditTaskName}>
            <i className="fa fa-pencil-square-o"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default TaskListItem;
