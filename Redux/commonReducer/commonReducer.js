import {
  SHOW_SNACKBAR,
  CHANGE_LOADING,
  CHANGE_CUSTOM_MODAL,
} from "../ActionTypes";
const initalSate = {
  isLoading: false,
  ModalVisible: {
    visible: false,
    type: null,
  },
  SnackBarVisible: {
    visible: false,
    message: null,
  },
};

export function commonReducer(state = initalSate, action) {
  switch (action.type) {
    case CHANGE_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    case SHOW_SNACKBAR: {
      console.log(state.SnackBarVisible.visible, "current");
      console.log(!state.SnackBarVisible.visible, "after update");
      return {
        ...state,
        SnackBarVisible: {
          visible: !state.SnackBarVisible.visible,
          message: action.payload,
        },
      };
    }
    case CHANGE_CUSTOM_MODAL: {
      return {
        ...state,
        ModalVisible: {
          visible: !state.ModalVisible.visible,
          type: action.payload,
        },
      };
    }
    default:
      return state;
  }
}
