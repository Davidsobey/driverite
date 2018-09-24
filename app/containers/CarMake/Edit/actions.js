/*
 *
 * Edit actions
 *
 */

import { EDIT_CAR_MAKE_SUCCESS, EDIT_CAR_MAKE_REQUEST } from './constants';

export function editCarMakeRequest(make) {
  return {
    type: EDIT_CAR_MAKE_REQUEST,
    payload: make,
  };
}

export function editCarMakeSuccess(make) {
  return {
    type: EDIT_CAR_MAKE_SUCCESS,
    payload: make,
  };
}
