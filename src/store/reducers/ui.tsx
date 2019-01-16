import { Action } from 'redux';
import { Reducer } from 'redux';

import { TOGGLE_DRAWER } from '../actions/actionTypes';

type UIState = {
  isDrawerOpen: boolean;
};

const initialState: UIState = {
  isDrawerOpen: false
};

const reducer: Reducer<UIState> = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        isDrawerOpen: action.isDrawerOpen
      };
    default:
      return state;
  }
};

export default reducer;
