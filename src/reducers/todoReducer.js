import {FETCH_TODOS, NEW_TODO, TOGGLE_COMPLETE_TODO} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        items: action.payload
      };
    case TOGGLE_COMPLETE_TODO:
      return {
        ...state
      };
    case NEW_TODO:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    default:
      return state;
  }
}
