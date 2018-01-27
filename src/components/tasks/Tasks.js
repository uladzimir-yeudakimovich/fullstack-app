import React, { Component } from 'react';
import TaskList from './TaskList';
import AddItemForm from './../AddItemForm';
import JSONdate from './../../data.json';

class Tasks extends Component{
  constructor(props) {
    super(props);
    this.state = {
      taskList: JSONdate.tasks
    }

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
  }

  addItem(todoItem) {
    JSONdate.tasks.unshift({
      category: this.props.category,
      value: todoItem.newItemValue,
      done: false
    });

    console.log('add');

    this.setState({ taskList: JSONdate.tasks });
  }

  removeItem(itemIndex) {
    JSONdate.tasks.splice(itemIndex, 1);
    this.setState({ taskList: JSONdate.tasks });
  }

  markTodoDone(itemIndex) {
    let todo = JSONdate.tasks[itemIndex];
    JSONdate.tasks.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? JSONdate.tasks.push(todo) : JSONdate.tasks.unshift(todo);

    this.setState({ taskList: JSONdate.tasks });
  }

  render() {
    return (
      <div className="tasks">
        <AddItemForm addItem={this.addItem} target={'Text input with button'}/>
        <br />
        <TaskList items={this.props.items}
                  filterText={this.props.filterText}
                  done={this.props.done}
                  category={this.props.category}
                  removeItem={this.removeItem}
                  markTodoDone={this.markTodoDone}
        />
      </div>
    )
  }
}

export default Tasks;
