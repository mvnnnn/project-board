import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions/categoryActions";
import CreateTasksComponent from "../components/task/CreateTask";

const findTaskIndex = (tasks, id) => {
  let index = -1;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task_id === id) {
      index = i;
      break;
    }
  }
  return index;
};

export class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateTaskModal: false,
      taskTitle: null,
      particepants: [],
      selectedDate: new Date(),
      progressValue: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.showModal) {
      const taskIndex = findTaskIndex(
        nextProps.category.tasks,
        nextProps.taskId
      );

      const taskData = nextProps.category.tasks[taskIndex];

      this.setState({
        showCreateTaskModal: true,
        taskTitle: taskData.task_title,
        particepants: taskData.participant,
        selectedDate: taskData.date,
        progressValue: taskData.progress
      });
    }
  }

  closeCreateTaskModal = () => {
    this.setState({
      showCreateTaskModal: false,
      taskTitle: null,
      particepants: [],
      selectedDate: new Date(),
      progressValue: 0
    });
    this.props.clearCategoryData();
  };

  openCreateTaskModal = () => {
    this.setState({
      showCreateTaskModal: true
    });
  };

  changeTaskTitle = e => {
    this.setState({ taskTitle: e.target.value });
  };

  idGenerator = n => {
    let generatorId = "";
    var stringg =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    for (let i = 0; i < n; i++) {
      generatorId += stringg.charAt(Math.floor(Math.random() * stringg.length));
    }
    return generatorId;
  };

  createTasks = () => {
    const { taskTitle, particepants, selectedDate, progressValue } = this.state;
    const { category_id, showModal, category, taskId } = this.props;

    if (showModal) {
      const requestObj = {
        category_id: category.category_id,
        taskData: {
          task_id: taskId,
          task_title: taskTitle,
          participant: particepants,
          date: selectedDate,
          progress: progressValue
        }
      };
      this.props.actions.updateTask(requestObj);
    } else {
      let task_id =
        this.idGenerator(5) + this.state.taskTitle + this.idGenerator(5);

      const requestObj = {
        category_id: category_id,
        taskData: {
          task_id,
          task_title: taskTitle,
          participant: particepants,
          date: selectedDate,
          progress: progressValue
        }
      };
      this.props.actions.createTask(requestObj);
    }

    this.props.clearCategoryData();

    this.setState({
      showCreateTaskModal: false,
      taskTitle: null,
      particepants: [],
      selectedDate: new Date(),
      progressValue: 0
    });
  };

  onChangeDate = e => {
    this.setState({
      selectedDate: e
    });
  };

  onToggleCheckbox = e => {
    let { particepants } = this.state;
    if (particepants.includes(e)) {
      particepants = particepants.filter(data => data !== e);
    } else {
      particepants.push(e);
    }
    this.setState({
      particepants: particepants
    });
  };

  onChangeSliderValue = e => {
    // console.log(e);
    this.setState({
      progressValue: e.target.value
    });
  };

  render() {
    const {
      showCreateTaskModal,
      taskTitle,
      particepants,
      selectedDate,
      progressValue
    } = this.state;
    return (
      <div>
        <CreateTasksComponent
          showCreateTaskModal={showCreateTaskModal}
          taskTitle={taskTitle}
          particepants={particepants}
          selectedDate={selectedDate}
          progressValue={progressValue}
          changeTaskTitle={this.changeTaskTitle}
          closeCreateTaskModal={this.closeCreateTaskModal}
          openCreateTaskModal={this.openCreateTaskModal}
          onChangeDate={this.onChangeDate}
          onToggleCheckbox={this.onToggleCheckbox}
          onChangeSliderValue={this.onChangeSliderValue}
          createTasks={this.createTasks}
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
