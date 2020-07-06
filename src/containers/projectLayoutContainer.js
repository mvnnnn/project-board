import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Nav, Glyphicon } from "react-bootstrap";

import NavBar from "../components/navbar/navbar";
import ProjectDetails from "../components/project/ProjectDetails";

import * as actions from "../actions/categoryActions";

const style = {
  color: "white",
  backgroundColor: "#00b386",
  fontSize: "25"
};

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

    console.log(categories);

    return (
      <div>
        <NavBar>
          <Nav pullRight>
            <div>
              <a href="/">
                <Glyphicon bsSize="large" style={style} glyph="remove" />
              </a>
            </div>
          </Nav>
        </NavBar>

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
  console.log(state);
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
