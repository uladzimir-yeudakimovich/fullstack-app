import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import SearchBar from './SearchBar';
import Tasks from './tasks/Tasks';
import Categories from './categories/Categories';


class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      done: true,
      category: ''
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleShowDoneChange = this.handleShowDoneChange.bind(this);
    this.handleChooseCategory = this.handleChooseCategory.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleShowDoneChange(done) {
    this.setState({
      done: done
    })
  }

  handleChooseCategory(categoryName) {
    this.setState({
      category: categoryName
    })
  }

  render() {
    return (
      <div id="main">
        <header>
          <TodoHeader />
          <SearchBar
            filterText={this.state.filterText}
            done={this.state.done}
            category={this.state.category}
            onFilterTextChange={this.handleFilterTextChange}
            onDoneChange={this.handleShowDoneChange}
          />
        </header>
        <hr />
        <main>
          <Categories
            items={this.props.initItems.categories}
            handleChooseCategory={this.handleChooseCategory}
          />
          <Tasks
            items={this.props.initItems.tasks}
            filterText={this.state.filterText}
            done={this.state.done}
            category={this.state.category}
          />
        </main>
      </div>
    );
  }
}

export default TodoApp;
