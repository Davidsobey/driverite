/*
 *
 * Rotation actions
 *
 */

import * as ACTIONS from './constants';

export function getRotation(rotationId) {
  return {
    type: ACTIONS.GET_ROTATION,
    payload: rotationId,
  };
}

export function loadAllRotations(rotationsArray) {
  return {
    type: ACTIONS.LOAD_ROTATIONS,
    payload: rotationsArray,
  };
}

export function deleteRotation(rotationId) {
  return {
    type: ACTIONS.DELETE_ROTATIONS,
    payload: rotationId,
  };
}

export function getAllRotations() {
  return {
    type: ACTIONS.GET_ROTATIONS,
  };
}
