import { ADD_TASK, TASK_COMPLETED, REMOVE_TASK } from "./action-types";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: { task },
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: { id },
  };
};

export const taskCompleted = (id) => {
  return {
    type: TASK_COMPLETED,
    payload: { id },
  };
};
