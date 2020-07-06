import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import ProjectLayoutContainer from "./projectLayoutContainer";

let styles = {
  grid: {
    width: "100%",
    margin: "2px auto",
    whiteSpace: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
    verticalAlign: "text-top"
  }
};

class projectContainer extends Component {
  render() {
    return (
      <div style={styles.grid}>
        <ProjectLayoutContainer projectTitle="Project Board" />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(projectContainer);
