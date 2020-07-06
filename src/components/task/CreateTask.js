import React from "react";
import DatePicker from "react-datepicker";
import ReactBootstrapSlider from "react-bootstrap-slider";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "react-datepicker/dist/react-datepicker.css";

import "./createTask.scss";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Glyphicon,
  Checkbox
} from "react-bootstrap";

import ModalComponent from "../widgets/Modal";

import { Candidates } from "../../services/candidateData";

const createTasksComponent = ({
  showCreateTaskModal,
  taskTitle,
  particepants,
  selectedDate,
  progressValue,
  changeTaskTitle,
  closeCreateTaskModal,
  openCreateTaskModal,
  onChangeDate,
  onToggleCheckbox,
  onChangeSliderValue,
  createTasks
}) => {
  return (
    <div className="createTask">
      <div className="createTask_card" onClick={() => openCreateTaskModal()}>
        <h5 id="createTask" className="createTask_grid">
          <Glyphicon glyph="plus-sign" />
          <br />
          Create Task
        </h5>
      </div>

      <ModalComponent
        show={showCreateTaskModal}
        onHide={closeCreateTaskModal}
        ModalTitle="Create Task"
        addAdd={createTasks}
        addBtnLabel="Create"
      >
        <form>
          <FormGroup controlId="formBasicText" validationState="">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              value={taskTitle}
              placeholder="Enter Task Title"
              onChange={e => changeTaskTitle(e)}
            />
          </FormGroup>

          <div>
            <ControlLabel>Candidates</ControlLabel>
            {Candidates.map(candidate => (
              <Checkbox
                name={candidate.name}
                checked={particepants.includes(candidate.name)}
                onChange={() => onToggleCheckbox(candidate.name)}
              >
                <img
                  alt={candidate.name}
                  src={candidate.pic}
                  style={{ height: 30, width: 30 }}
                />{" "}
                <span>{candidate.name}</span>
              </Checkbox>
            ))}
          </div>

          <ControlLabel>Task Date</ControlLabel>
          <div>
            <DatePicker selected={selectedDate} onChange={onChangeDate} />
          </div>
          <br />

          <ControlLabel>Task Progress</ControlLabel>
          <div>
            <ReactBootstrapSlider
              value={progressValue}
              change={onChangeSliderValue}
              // slideStop={this.changeValue}
              step={1}
              max={100}
              min={0}
              orientation="horizontal"
            />
          </div>
        </form>
      </ModalComponent>
    </div>
  );
};

export default createTasksComponent;
