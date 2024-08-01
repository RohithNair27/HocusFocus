import { CHANGE_LOADING } from "../ActionTypes";
export function isLoadingAction() {
  return { type: CHANGE_LOADING };
}
