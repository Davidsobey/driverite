/*
 *
 * Advertisement actions
 *
 */

import * as ACTIONS from './constants';

// export function getAd(adId) {
//   return {
//     type: ACTIONS.GET_AD,
//     payload: adId,
//   };
// }

// eslint-disable-next-line
export function loadAllAdsRequest() {
  return {
    type: ACTIONS.GET_ALL_ADS_REQUEST,
  };
}

// eslint-disable-next-line
export function loadAllAdsSuccess(ads) {
  return {
    type: ACTIONS.GET_ALL_ADS_SUCCESS,
    payload: ads,
  };
}
// export function deleteAd(adId) {
//   return {
//     type: ACTIONS.DELETE_ADS,
//     payload: adId,
//   };
// }
