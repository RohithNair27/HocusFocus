import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { TASK_COMPLETED, ADD_TASK, DELETE_TASK } from "../ActionTypes";


export function AddTaskAction(payload) {
  return {type:ADD_TASK,payload:{...payload,id:uuidv4()}}
}

export function DeleteTaskAction(deleteId) {
  return { type:  DELETE_TASK,payload:deleteId};
}

export function CompleteTaskAction(completeID){

  return {type: TASK_COMPLETED,payload:completeID}
}