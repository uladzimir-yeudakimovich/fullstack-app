import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleDoneChange = this.handleDoneChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }

  handleDoneChange(e) {
    this.props.onDoneChange(e.target.checked);
  }

  render() {
    return (
      <form className="searchBar form-inline">
          <label>
            <input
              type="checkbox"
              checked={this.props.done}
              onChange={this.handleDoneChange}
              className="form-check-input"
            />
            Show done
          </label>
        <input
          type="text"
          placeholder="Search"
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
          className="form-control"
        />
      </form>
    );
  }
}

export default SearchBar;
