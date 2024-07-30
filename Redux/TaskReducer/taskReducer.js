import { ADD_TASK, DELETE_TASK, TASK_COMPLETED } from "../ActionTypes";

const InitialState = [
  { task: "Complete book", taskCurrentState: "NOT_COMPLETED" },
  {
    task: "This is the second taks that is supposed to be looooooooooog",
    taskCurrentState: "COMPLETED",
  },
];

export function TaskReducer(state = InitialState, action) {
  switch (action.type) {
    case ADD_TASK: {
    }
    case DELETE_TASK: {
    }
    case TASK_COMPLETED: {
    }
    default:
      return state;
  }
}
