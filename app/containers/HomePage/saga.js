/**
 * Gets the repositories of the user from Github
 */

// import jwtDecode from 'jwt-decode';
import { put, takeLatest } from 'redux-saga/effects';

import * as ACTIONS from './constants';

import { loadAllAdSuccess } from './actions';

import { error, success } from '../../components/Alert/actions';
import NetworkHandler from '../../net/NetworkHandler';
import { DOMAIN } from '../../config/constants';

function* createUser(user) {
  // Load Data
  const Network = new NetworkHandler();

  try {
    yield Network.post(`${DOMAIN}/customers`, user.payload);
    yield put(
      success({
        message: 'Thank you for contacting us, we will respond shortly.',
      }),
    );
  } catch (errorMsg) {
    yield put(
      error({
        message: 'Unable to send request. Please try again later',
      }),
    );
  }
}

function* loadAdRequest() {
  // Load Data
  const Network = new NetworkHandler();
  const count = 5;
  try {
    const ads = yield Network.fetch(`${DOMAIN}/ads/WithPhotos/${count}`, null);
    yield put(loadAllAdSuccess(ads));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load data, please try again.${errorMsg}`,
      }),
    );
  }
}

export default function* UserSagas() {
  yield takeLatest(ACTIONS.CREATE_USER_REQUEST, createUser);
  yield takeLatest(ACTIONS.LOAD_AD_REQUEST, loadAdRequest);
}
