import React from "react";

import "./projectDetails.scss";
import DragDropContainer from "../../containers/dragDropContainer";
import AddCategoryContainer from "../../containers/addCategoryContainer";
import CreateTaskContainer from "../../containers/createTaskContainer";

const ProjectDetails = ({
  categories,
  taskId,
  categoryId,
  projectTitle,
  onClickOnCard,
  clearCategoryData
}) => {
  return (
    <div className="project">
      {categories &&
        categories.map((data, i) => {
          return (
            <div
              id="members"
              key={data.category_id}
              className="project_grid project_taskgrid"
            >
              <div className="project_card">
                <h5 className="project_title">{data.category_title}</h5>
              </div>
              <DragDropContainer
                id={data.category_id}
                CNumber={data.category_id}
                list={data.tasks}
                memberName={data.category_title}
                projectTitle={projectTitle}
                onClickOnCard={onClickOnCard}
              />
              <CreateTaskContainer
                showModal={data.category_id === categoryId}
                taskId={taskId}
                category={data}
                category_id={data.category_id}
                clearCategoryData={clearCategoryData}
              />
            </div>
          );
        })}
      <div className="project_grid project_addmember">
        <AddCategoryContainer projectTitle={projectTitle} />
      </div>
    </div>
  );
};

export default ProjectDetails;
