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
