/**
 * Gets the repositories of the user from Github
 */

// import jwtDecode from 'jwt-decode';
import { put, takeLatest } from 'redux-saga/effects';

import * as ACTIONS from './constants';
import { loadAllReviewsSuccess } from './actions';

import { error } from '../../../components/Alert/actions';
import NetworkHandler from '../../../net/NetworkHandler';
import { DOMAIN } from '../../../config/constants';

function* getAllReviews() {
  // Load Data
  const Network = new NetworkHandler();

  try {
    const reviews = yield Network.fetch(`${DOMAIN}/reviews`, null);
    yield put(loadAllReviewsSuccess(reviews));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load reviews, please try again.${errorMsg}`,
      }),
    );
  }
}

export default function* reviewSagas() {
  yield takeLatest(ACTIONS.GET_ALL_REVIEWS_REQUEST, getAllReviews);
}
