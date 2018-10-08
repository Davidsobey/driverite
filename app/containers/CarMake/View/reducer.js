/**
 * Gets the repositories of the user from Github
 */

// import jwtDecode from 'jwt-decode';
import { fromJS } from 'immutable';
import { isNumber } from 'util';
import {
  GET_ALL_CAR_MAKES_REQUEST,
  GET_ALL_CAR_MAKES_SUCCESS,
  DELETE_CAR_MAKES_REQUEST,
  DELETE_CAR_MAKES_SUCCESS,
  GET_CAR_MAKE_REQUEST,
  GET_CAR_MAKE_SUCCESS,
} from './constants';

function filterById(id, delId) {
  if (isNumber(id) && id !== 0 && id !== delId) {
    return true;
  }
  return false;
}

const initialState = fromJS({});

function loadMake(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CAR_MAKES_REQUEST:
      return state;
    case GET_ALL_CAR_MAKES_SUCCESS:
      return { ...state, carMakes: action.payload };
    case GET_CAR_MAKE_REQUEST:
      return state;
    case GET_CAR_MAKE_SUCCESS:
      return { ...state, carMake: action.payload };
    case DELETE_CAR_MAKES_REQUEST:
      return state;
    case DELETE_CAR_MAKES_SUCCESS:
      return {
        ...state,
        carMakes: state.carMakes.filter(obj => filterById(obj.id, action.id)),
      };
    default:
      return state;
  }
}

export default loadMake;
