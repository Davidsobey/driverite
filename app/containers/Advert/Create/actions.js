/*
 *
 * RotationCreate actions
 *
 */
import * as ACTIONS from './constants';

// eslint-disable-next-line
export function createAdRequest(ad) {
  return {
    type: ACTIONS.CREATE_AD_REQUEST,
    payload: ad,
  };
}
