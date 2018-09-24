/*
 *
 * RotationCreate actions
 *
 */
import * as ACTIONS from './constants';

// eslint-disable-next-line
export function createCarMakeRequest(carMake) {
  return {
    type: ACTIONS.CREATE_CAR_MAKE_REQUEST,
    payload: carMake,
  };
}
