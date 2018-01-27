import React, { Component } from 'react';
import CategoryList from './CategoryList';
import SingleCategory from './SingleCategory';

class CategoryListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategoryList: this.props.item.subcategories,
      showSubcategories: false,
    }

    this.handleAddSubcategory = this.handleAddSubcategory.bind(this);
    this.handleRemoveSubcategory = this.handleRemoveSubcategory.bind(this);
    this.handleEditSubcategoryName = this.handleEditSubcategoryName.bind(this);
    this.handleShowSubcategories = this.handleShowSubcategories.bind(this);
    this.handleChooseSubcategory = this.handleChooseSubcategory.bind(this);
  }

  handleAddSubcategory(e) {
    e.stopPropagation();
    if (this.state.subcategoryList) return;

    let subcategoryList = this.state.subcategoryList;
    let subcategoryItem  = prompt('Enter the name of the new category', 'New category name');

    subcategoryList.unshift({
      value: subcategoryItem,
    });

    this.setState({ subcategoryList: subcategoryList });
  }

  handleRemoveSubcategory(itemIndex) {
    let subcategoryList = this.state.subcategoryList;

    subcategoryList.splice(itemIndex, 1);
    this.setState({ subcategoryList: subcategoryList });
  }

  handleEditSubcategoryName(itemIndex) {
    let newCategoryName  = prompt('Enter the name of the Subcategory', 'New subcategory name');
    let subcategoryList = this.state.subcategoryList;

    if (newCategoryName) {
      subcategoryList[itemIndex].value = newCategoryName;;
      this.setState({ subcategoryList: subcategoryList });
    }
  }

  handleShowSubcategories(e) {
    e.stopPropagation();

    let showSubcategories = !this.state.showSubcategories;
    this.setState({ showSubcategories: showSubcategories });
  }

  handleChooseSubcategory(itemIndex) {
    this.props.handleChooseCategory(this.state.subcategoryList[itemIndex].value);
  }

  render () {
    let showButtonClass = "fa fa-chevron-" +
        (this.state.showSubcategories ? "up" : "down");

    return (
      <div>
        <SingleCategory
          item={this.props.item} index={this.props.index}
          removeItem={this.props.removeItem}
          editCategoryName={this.props.editCategoryName}
          handleChooseCategory={this.props.handleChooseCategory}
          handleShowSubcategories={this.handleShowSubcategories}
          handleAddSubcategory={this.handleAddSubcategory}
          showButtonClass={showButtonClass}
        />
        {(this.state.showSubcategories &&
          this.props.item.subcategories) &&
          <li className="subcategories">
            <CategoryList items={this.props.item.subcategories}
                          removeItem={this.handleRemoveSubcategory}
                          editCategoryName={this.handleEditSubcategoryName}
                          handleChooseCategory={this.handleChooseSubcategory}
            />
          </li>
        }
      </div>
    );
  }
}

export default CategoryListItem;
