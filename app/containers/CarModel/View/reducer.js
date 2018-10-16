/*
 *
 * Rotation reducer
 *
 */

import { fromJS } from 'immutable';
// import { isNumber } from 'util';

import * as ACTIONS from './constants';

const initialState = fromJS({});

// function filterById(id, delId) {
//   if (isNumber(id) && id !== 0 && id !== delId) {
//     return true;
//   }
//   return false;
// }

function carModelReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.DELETE_CAR_MODELS_REQUEST:
      return state;
    case ACTIONS.GET_ALL_CAR_MODELS_REQUEST:
      console.log('Reducer Load all car models');
      return { ...state, modelsLoading: true };
    case ACTIONS.GET_ALL_CAR_MODELS_SUCCESS:
      return { ...state, models: action.payload, modelsLoading: false };
    case ACTIONS.GET_CAR_MODEL_REQUEST:
      return state;
    case ACTIONS.GET_CAR_MODEL_SUCCESS:
      return { ...state, carModel: action.payload };
    default:
      return state;
  }
}

export default carModelReducer;
