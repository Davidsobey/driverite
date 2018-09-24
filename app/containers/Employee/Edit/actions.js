/*
 *
 * Edit actions
 *
 */

import { EDIT_EMPLOYEE_SUCCESS, EDIT_EMPLOYEE_REQUEST } from './constants';

export function editEmployeeRequest(employee) {
  return {
    type: EDIT_EMPLOYEE_REQUEST,
    payload: employee,
  };
}

export function editEmployeeSuccess(employee) {
  return {
    type: EDIT_EMPLOYEE_SUCCESS,
    payload: employee,
  };
}
