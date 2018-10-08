/*
 *
 * View Reviews actions
 *
 */

import * as ACTIONS from './constants';

// export function getAd(adId) {
//   return {
//     type: ACTIONS.GET_REVIEW,
//     payload: adId,
//   };
// }

// eslint-disable-next-line
export function loadAllReviewsRequest() {
  return {
    type: ACTIONS.GET_ALL_REVIEWS_REQUEST,
  };
}

// eslint-disable-next-line
export function loadAllReviewsSuccess(reviews) {
  return {
    type: ACTIONS.GET_ALL_REVIEWS_SUCCESS,
    payload: reviews,
  };
}
// export function deleteReview(reviewId) {
//   return {
//     type: ACTIONS.DELETE_REVIEW,
//     payload: reviewId,
//   };
// }
