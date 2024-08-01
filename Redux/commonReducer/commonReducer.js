import CHANGE_LOADING from "./commonAction";
import { isLoadingAction } from "./commonAction";
const initalSate = { isLoading: false };

export function commonReducer(state = initalSate, action) {
  switch (action.type) {
    case CHANGE_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    default:
        return state
  }
}
