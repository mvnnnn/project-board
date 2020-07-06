import React, { Component, Fragment } from "react";
import update from "react-addons-update";
import CardContainer from "./cardContainer";
import { DropTarget } from "react-dnd";
import flow from "lodash/flow";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/categoryActions";

class DragDropContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }

  componentDidMount() {
    this.setState({ cards: this.props.list });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cards: nextProps.list
    });
  }

  pushCard(card) {
    this.setState(
      update(this.state, {
        cards: {
          $push: [card]
        }
      })
    );
  }

  removeCard(index) {
    // this.setState(
    //   update(this.state, {
    //     cards: {
    //       $splice: [[index, 1]]
    //     }
    //   })
    // );
  }

  moveCard(dragIndex, hoverIndex) {
    let { cards } = this.state;
    let dragCard = cards[dragIndex];

    this.setState(
      update(this.state, {
        cards: {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        }
      })
    );
  }

  render() {
    let { cards } = this.state;
    let { canDrop, isOver, connectDropTarget, id, onClickOnCard } = this.props;
    let isActive = canDrop && isOver;

    const backgroundColor = isActive ? "#00b386" : "#FFF";
    const height = cards.length === 0 ? "50px" : "auto";
    const style = {
      minWidth: "200px",
      width: 0.2 * window.innerWidth,
      backgroundColor: backgroundColor,
      height: height
    };

    return connectDropTarget(
      <div style={style}>
        {cards.map((card, i) => {
          return (
            <Fragment>
              {card && (
                <CardContainer
                  key={card.task_id}
                  index={card.task_id}
                  listId={id}
                  card={card}
                  categoryId={id}
                  onClickOnCard={onClickOnCard}
                  // projectTitle={this.props.projectTitle}
                  removeCard={() => this.removeCard()}
                  moveCard={() => this.moveCard()}
                />
              )}
            </Fragment>
          );
        })}
      </div>
    );
  }
}

const cardTarget = {
  drop(props, monitor, component) {
    const { id } = props;
    const sourceObj = monitor.getItem();
    if (id !== sourceObj.listId) component.pushCard(sourceObj.card);
    return {
      listId: id
    };
  }
};

function mapStateToProps(state) {
  return {
    category_fetching: state.categoryReducer.category_fetching,
    categories: state.categoryReducer.categories
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default flow(
  DropTarget("CARD", cardTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })),
  connect(mapStateToProps, mapDispatchToProps)
)(DragDropContainer);
