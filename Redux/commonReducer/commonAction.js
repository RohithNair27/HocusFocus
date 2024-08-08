import { CHANGE_LOADING,CHANGE_CUSTOM_MODAL,SHOW_SNACKBAR } from "../ActionTypes";


export function isLoadingAction() {
  return { type: CHANGE_LOADING };
}
export function isModalVisibleModal(payload){
  return {type:CHANGE_CUSTOM_MODAL,payload:payload}
}
export function isSnackBarVisible(payload){
  return {type:SHOW_SNACKBAR, payload:payload}
}