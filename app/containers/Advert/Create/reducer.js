/*
 *
 * RotationCreate reducer
 *
 */

import { fromJS } from 'immutable';
import { CREATE_AD_REQUEST, GET_ALL_CARS_REQUEST, GET_ALL_CARS_SUCCESS } from './constants';

const initialState = fromJS({});

function adCreateReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_AD_REQUEST:
      return state;
    case GET_ALL_CARS_REQUEST:
      return { ...state, carsLoading: true };
    case GET_ALL_CARS_SUCCESS:
      return { ...state, cars: action.payload, carsLoading: false };
    default:
      return state;
  }
}

export default adCreateReducer;
