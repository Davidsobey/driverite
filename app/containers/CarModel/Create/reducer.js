/*
 *
 * RotationCreate reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_CAR_MODEL_REQUEST,
  GET_ALL_CAR_MAKES_REQUEST,
  GET_ALL_CAR_MAKES_SUCCESS } from './constants';

const initialState = fromJS({});

function modelCreateReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CAR_MODEL_REQUEST:
      return state;
    case GET_ALL_CAR_MAKES_REQUEST:
      return { ...state, makesLoading: true };
    case GET_ALL_CAR_MAKES_SUCCESS:
      return { ...state, makes: action.payload, makesLoading: false };
    default:
      return state;
  }
}

export default modelCreateReducer;
