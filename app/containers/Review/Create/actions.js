/*
 *
 * RotationCreate actions
 *
 */
import * as ACTIONS from './constants';

// eslint-disable-next-line
export function createReviewRequest(review) {
  return {
    type: ACTIONS.CREATE_REVIEW_REQUEST,
    payload: review,
  };
}
export function loadAllCarsRequest() {
  return {
    type: ACTIONS.GET_ALL_CARS_REQUEST,
  };
}

// eslint-disable-next-line
export function loadAllCarsSuccess(cars) {
  return {
    type: ACTIONS.GET_ALL_CARS_SUCCESS,
    payload: cars,
  };
}
