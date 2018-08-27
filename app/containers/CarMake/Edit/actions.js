/*
 *
 * Edit actions
 *
 */

import {
  EDIT_CAR_MAKE, DEFAULT_ACTION,
} from './constants';

export function editCarMake() {
  return {
    type: EDIT_CAR_MAKE,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
