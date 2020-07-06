import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import NavBar from "../components/navbar/navbar";
import ProjectDetails from "../components/project/ProjectDetails";

import * as actions from "../actions/categoryActions";

export class ProjectDetailContainer extends Component {
  constructor() {
    super();
    this.state = {
      taskId: -1,
      categoryId: -1
    };
  }
  componentDidMount() {
    this.props.actions.loadCategory();
  }

  onClickOnCard = (tId, cId) => {
    this.setState({
      taskId: tId,
      categoryId: cId
    });
  };

  clearCategoryData = () => {
    this.setState({
      taskId: -1,
      categoryId: -1
    });
  };

  render() {
    const { categories } = this.props;
    const { taskId, categoryId } = this.state;

    return (
      <div>
        <NavBar />

        <ProjectDetails
          categories={categories}
          taskId={taskId}
          categoryId={categoryId}
          onClickOnCard={this.onClickOnCard}
          clearCategoryData={this.clearCategoryData}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryReducer.categories,
    category_fetching: state.categoryReducer.category_fetching
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetailContainer);
