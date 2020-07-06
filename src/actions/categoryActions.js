import * as types from "./actionTypes";
import CategoryApi from "../api/categoryApi";

export function loadCategorySuccess(category) {
  return { type: types.LOAD_CATEGORY_SUCCESS, category };
}

export function createTaskSuccess(data) {
  return { type: types.CREATE_TASK_SUCCESS, data };
}

export function updateTaskSuccess(data) {
  return {
    type: types.UPDATE_TASK_SUCCESS,
    data
  };
}

export function dragAndDropCardUpdateSuccess(dragListId, dropListId, cardId) {
  return {
    type: types.CARD_DRAG_AND_DROP_SUCCESS,
    data: {
      dragListId,
      dropListId,
      cardId
    }
  };
}

export function addCategorySuccess(categoryName) {
  return { type: types.CREATE_CATEGORY_SUCCESS, categoryName };
}

export function loadCategory() {
  return function(dispatch) {
    return CategoryApi.getAllCategory()
      .then(category => {
        dispatch(loadCategorySuccess(category));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function createTask(data) {
  return function(dispatch) {
    dispatch(createTaskSuccess(data));
  };
}

export function updateTask(data) {
  return function(dispatch) {
    dispatch(updateTaskSuccess(data));
  };
}

export function dragAndDropCardUpdate(dragListId, dropListId, cardId) {
  return function(dispatch) {
    dispatch(dragAndDropCardUpdateSuccess(dragListId, dropListId, cardId));
  };
}

export function addCategory(categoryName) {
  return function(dispatch) {
    dispatch(addCategorySuccess(categoryName));
  };
}
