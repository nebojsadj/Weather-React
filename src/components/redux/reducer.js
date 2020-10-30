import initialState from "./initialState";
import {
  FETCH_DATA_LOADING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "./types";

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_LOADING:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, cityData: action.payload };
    case FETCH_DATA_ERROR:
      return {
        loading: false,
        cityData: {},
        error: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
