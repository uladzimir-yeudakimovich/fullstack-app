import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem';

class CategoryList extends Component {
  render() {
    let items = this.props.items.map((item, index) => {
      return (
        <CategoryListItem key={index} item={item} index={index}
                          removeItem={this.props.removeItem}
                          editCategoryName={this.props.editCategoryName}
                          handleChooseCategory={this.props.handleChooseCategory}
        />
      );
    });

    return (
      <ul className="category-list list-group"> {items} </ul>
    );
  }
}

export default CategoryList;
