/*
 *
 * ManagerCreate actions
 *
 */

import * as ACTIONS from './constants';

export function defaultAction() {
  return {
    type: ACTIONS.DEFAULT_ACTION,
  };
}

export const createManagerRequest = values => ({
  type: ACTIONS.CREATE_MANAGER_ACTION,
  payload: values,
});
