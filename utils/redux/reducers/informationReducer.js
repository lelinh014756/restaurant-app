import * as types from "../types/informationTypes";

const initState = {
  data: {}
};

const informationReducer = (state = initState, action) => {
  switch (action.type) {
    case types.INFORMATION_STEP1_SAVE:
      return {
        ...state,
        data: action.payload
      }
    case types.INFORMATION_UPDATE_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};


export default informationReducer;
