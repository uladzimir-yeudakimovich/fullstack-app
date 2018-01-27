import React, { Component } from 'react';
import TaskListItem from './TaskListItem';

class TaskList extends Component{
  render() {
    const filterText = this.props.filterText;
    const done = this.props.done;
    const category = this.props.category;
    let items = [];

    this.props.items.forEach((item, index) => {
      if (item.value.indexOf(filterText) === -1) {
        return;
      }
      if (!done && item.done) {
        return;
      }
      if (item.category !== category) {
        return;
      }

      items.push(
        <TaskListItem key={index} item={item} index={index}
          removeItem={this.props.removeItem}
          markTodoDone={this.props.markTodoDone}
        />
      );
    });

    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}

export default TaskList;
