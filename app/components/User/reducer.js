import { fromJS } from 'immutable';
import { REQUEST_LOGIN, USER_DECODED } from './constants';

const routeInitialState = fromJS({});

function userReducer(state = routeInitialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return { ...state };
    case USER_DECODED:
      return state.merge(action.payload);
    default:
      return state;
  }
}

export default userReducer;
