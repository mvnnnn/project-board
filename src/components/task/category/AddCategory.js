import React from "react";
import ModalComponent from "../../widgets/Modal";

import "./addCategory.scss";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const AddCategoryComponent = ({
  showCreateCategoryModal,
  categoryName,
  openCreateCategoryModal,
  closeCreateCategoryModal,
  changeCategoryName,
  addCategory
}) => {
  return (
    <div className="addCategory">
      <div
        className="addCategory_card"
        onClick={() => openCreateCategoryModal()}
      >
        <h5 id="addNewMember" className="addCategory_grid">
          Add New Category
        </h5>
      </div>

      <ModalComponent
        show={showCreateCategoryModal}
        onHide={closeCreateCategoryModal}
        ModalTitle="Add Category"
        addAdd={addCategory}
        addBtnLabel="Create"
      >
        <form>
          <FormGroup controlId="formBasicText" validationState="">
            <ControlLabel>Category Name</ControlLabel>
            <FormControl
              type="text"
              value={categoryName}
              placeholder="Enter Category Name"
              onChange={e => changeCategoryName(e)}
            />
          </FormGroup>
        </form>
      </ModalComponent>
    </div>
  );
};

export default AddCategoryComponent;
