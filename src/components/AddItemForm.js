import React, { Component } from 'react';

class AddItemForm extends Component{
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    let newItemValue = this.refs.itemName.value;

    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }

  render() {
    let placeholder = this.props.target;

    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref="itemName" className="form-control"
               placeholder={placeholder}
        />
        <button type="submit" className="btn btn-default">Add</button>
      </form>
    );
  }
}

export default AddItemForm;
