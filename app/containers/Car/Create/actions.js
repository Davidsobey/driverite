/*
 *
 * RotationCreate actions
 *
 */
import * as ACTIONS from './constants';

// eslint-disable-next-line
export function createCarRequest(car) {
  return {
    type: ACTIONS.CREATE_CAR_REQUEST,
    payload: car,
  };
}
