/*
 *
 * Rotation actions
 *
 */

import * as ACTIONS from './constants';

// export function getEmployee(employeeId) {
//   return {
//     type: ACTIONS.GET_EMPLOYEE,
//     payload: employeeId,
//   };
// }

// export function deleteEmployee(employeeId) {
//   return {
//     type: ACTIONS.DELETE_EMPLOYEE,
//     payload: employeeId,
//   };
// }

// eslint-disable-next-line
export function loadAllEmployees() {
  return {
    type: ACTIONS.GET_ALL_EMPLOYEES,
  };
}

export function loadAllEmployeesSuccess(employees) {
  return {
    type: ACTIONS.GET_ALL_EMPLOYEES_SUCCESS,
    payload: employees,
  };
}
