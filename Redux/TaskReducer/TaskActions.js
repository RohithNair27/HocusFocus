import { TASK_COMPLETED, ADD_TASK, DELETE_TASK } from "../ActionTypes";

export function AddTaskAction() {}
export function DeleteTaskAction() {
  return { type: TASK_COMPLETED };
}
