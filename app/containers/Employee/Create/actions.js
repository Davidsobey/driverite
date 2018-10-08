/*
 *
 * RotationCreate actions
 *
 */
import * as ACTIONS from './constants';

// eslint-disable-next-line
export function createEmployeeRequest(employee) {
  return {
    type: ACTIONS.CREATE_EMPLOYEE_REQUEST,
    payload: employee,
  };
}
