import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions/categoryActions";
import AddCategoryComponent from "../components/task/category/AddCategory";

export class AddCategoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateCategoryModal: false,
      categoryName: null
    };
  }

  closeCreateCategoryModal = () => {
    this.setState({
      showCreateCategoryModal: false,
      categoryName: null
    });
  };

  openCreateCategoryModal = () => {
    this.setState({ showCreateCategoryModal: true });
  };

  changeCategoryName = e => {
    this.setState({ categoryName: e.target.value });
  };

  addCategory = () => {
    const { categoryName } = this.state;
    this.props.actions.addCategory(categoryName);
    this.setState({
      showCreateCategoryModal: false,
      categoryName: null
    });
  };

  render() {
    const { showCreateCategoryModal, categoryName } = this.state;
    return (
      <div>
        <AddCategoryComponent
          showCreateCategoryModal={showCreateCategoryModal}
          categoryName={categoryName}
          openCreateCategoryModal={this.openCreateCategoryModal}
          closeCreateCategoryModal={this.closeCreateCategoryModal}
          changeCategoryName={this.changeCategoryName}
          addCategory={this.addCategory}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCategoryContainer);
