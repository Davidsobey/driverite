import CONSTANTS from './constants';

export function success(payload) {
  return { type: CONSTANTS.SUCCESS, payload };
}

export function error(payload) {
  return { type: CONSTANTS.ERROR, payload };
}

export function clear() {
  return { type: CONSTANTS.CLEAR };
}
