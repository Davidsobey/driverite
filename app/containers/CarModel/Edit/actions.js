/*
 *
 * Edit actions
 *
 */

import { EDIT_CAR_MODEL_SUCCESS, EDIT_CAR_MODEL_REQUEST } from './constants';

export function editCarModelRequest(model) {
  return {
    type: EDIT_CAR_MODEL_REQUEST,
    payload: model,
  };
}

export function editCarModelSuccess(model) {
  return {
    type: EDIT_CAR_MODEL_SUCCESS,
    payload: model,
  };
}
