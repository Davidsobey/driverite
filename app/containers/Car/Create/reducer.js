/*
 *
 * RotationCreate reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_CAR_REQUEST,
  GET_ALL_CAR_MODELS_REQUEST,
  GET_ALL_CAR_MODELS_SUCCESS } from './constants';

const initialState = fromJS({});

function carCreateReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CAR_REQUEST:
      return state;
    case GET_ALL_CAR_MODELS_REQUEST:
      return { ...state, modelsLoading: true };
    case GET_ALL_CAR_MODELS_SUCCESS:
      return { ...state, models: action.payload, modelsLoading: false };
    default:
      return state;
  }
}

export default carCreateReducer;
