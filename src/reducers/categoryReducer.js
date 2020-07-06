import * as types from "../actions/actionTypes";

const initialState = {
  categories: [],
  category_fetching: false
};

const findCategoryIndex = (categories, id) => {
  let index = -1;
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].category_id === id) {
      index = i;
      break;
    }
  }
  return index;
};

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

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_CATEGORY_SUCCESS:
      return {
        categories: action.category,
        category_fetching: !state.category_fetching
      };

    case types.CREATE_CATEGORY_SUCCESS:
      state.categories.push({
        category_title: action.categoryName,
        category_id: state.categories.length + 1,
        tasks: []
      });

      return {
        categories: state.categories,
        category_fetching: !state.category_fetching
      };

    case types.CREATE_TASK_SUCCESS:
      let catIndex = findCategoryIndex(
        state.categories,
        action.data.category_id
      );

      state.categories[catIndex].tasks.push(action.data.taskData);

      return Object.assign({}, state, {
        category_fetching: !state.category_fetching,
        categories: state.categories
      });

    case types.UPDATE_TASK_SUCCESS:
      const cagegoryIndex = findCategoryIndex(
        state.categories,
        action.data.category_id
      );

      const taskIndx = findTaskIndex(
        state.categories[cagegoryIndex].tasks,
        action.data.taskData.task_id
      );

      state.categories[cagegoryIndex].tasks[taskIndx] = action.data.taskData;

      return Object.assign({}, state, {
        categories: state.categories,
        category_fetching: !state.category_fetching
      });

    case types.CARD_DRAG_AND_DROP_SUCCESS:
      const dragCagegoryIndex = findCategoryIndex(
        state.categories,
        action.data.dragListId
      );
      const dropCagegoryIndex = findCategoryIndex(
        state.categories,
        action.data.dropListId
      );

      const taskIndex = findTaskIndex(
        state.categories[dragCagegoryIndex].tasks,
        action.data.cardId
      );

      state.categories[dropCagegoryIndex].tasks.push(
        state.categories[dragCagegoryIndex].tasks[taskIndex]
      );

      const updatedTask = state.categories[dragCagegoryIndex].tasks.filter(
        task => task.task_id !== action.data.cardId
      );

      state.categories[dragCagegoryIndex].tasks = updatedTask;

      return {
        categories: state.categories,
        category_fetching: !state.category_fetching
      };

    default:
      return state;
  }
}
