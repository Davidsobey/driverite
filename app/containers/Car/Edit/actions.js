/*
 *
 * Edit actions
 *
 */

import { EDIT_CAR_SUCCESS, EDIT_CAR_REQUEST } from './constants';

export function editCarRequest(car) {
  return {
    type: EDIT_CAR_REQUEST,
    payload: car,
  };
}

export function editCarSuccess(car) {
  return {
    type: EDIT_CAR_SUCCESS,
    payload: car,
  };
}
