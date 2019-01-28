import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./actionTypes";

export const addTask = (id, description) => ({
  type: ADD_TASK,
  payload: {
    id,
    description
  }
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: { id }
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: { id }
});
