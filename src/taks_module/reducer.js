import { ADD_TASK, TASK_COMPLETED, REMOVE_TASK } from "./action-types";

let id = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];

    case REMOVE_TASK:
      return state.filter((task) => task.id != action.payload.id);

    case TASK_COMPLETED:
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              completed: true,
            }
          : task
      );

    default:
      return state;
  }
}
