/*
 *
 * RotationCreate actions
 *
 */
import * as ACTIONS from './constants';

// eslint-disable-next-line
export function createCarModelRequest(carModel) {
  return {
    type: ACTIONS.CREATE_CAR_MODEL_REQUEST,
    payload: carModel,
  };
}
