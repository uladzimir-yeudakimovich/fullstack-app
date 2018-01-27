import React, { Component } from 'react';
import AddItemForm from './../AddItemForm';
import CategoryList from './CategoryList'
import JSONdate from './../../data.json';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: JSONdate.categories
    }

    this.addCategory = this.addCategory.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.editCategoryName = this.editCategoryName.bind(this);
    this.handleChooseCategory = this.handleChooseCategory.bind(this);
  }

  addCategory(categoryItem) {
    JSONdate.categories.unshift({
      value: categoryItem.newItemValue,
    });

    this.setState({ categoryList: JSONdate.categories });
  }

  removeCategory(itemIndex) {
    JSONdate.categories.splice(itemIndex, 1);
    this.setState({ categoryList: JSONdate.categories });
  }

  editCategoryName(itemIndex) {
    let newCategoryName  = prompt('Enter the name of the Category', 'New category name');
    if (newCategoryName) {
      JSONdate.categories[itemIndex].value = newCategoryName;;
      this.setState({ categoryList: JSONdate.categories });
    }
  }

  handleChooseCategory(value) {
    (typeof value === 'number') ?
    this.props.handleChooseCategory(JSONdate.categories[value].value) :
    this.props.handleChooseCategory(value);
  }

  render() {
    return (
      <div className="categories">
        <AddItemForm addItem={this.addCategory} target={'Enter category title'}/>
        <br />
        <div className="categoriesBar">
          <CategoryList items={this.props.items}
                      removeItem={this.removeCategory}
                      editCategoryName={this.editCategoryName}
                      handleChooseCategory={this.handleChooseCategory}
          />
        </div>
      </div>
    )
  }
}

export default Categories;
