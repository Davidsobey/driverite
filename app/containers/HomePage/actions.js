/*
 *
 * RotationCreate actions
 *
 */
import * as ACTIONS from './constants';

// eslint-disable-next-line
export function createUser(user) {
  return {
    type: ACTIONS.CREATE_USER_REQUEST,
    payload: user,
  };
}

export function loadAllAdRequest() {
  return {
    type: ACTIONS.LOAD_AD_REQUEST,
  };
}

export function loadAllAdSuccess(ads) {
  return {
    type: ACTIONS.LOAD_AD_SUCCESS,
    payload: ads,
  };
}
