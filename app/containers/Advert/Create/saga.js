/**
 * Gets the repositories of the user from Github
 */

// import jwtDecode from 'jwt-decode';
import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import * as ACTIONS from './constants';

import { error, success } from '../../../components/Alert/actions';
import NetworkHandler from '../../../net/NetworkHandler';
import { DOMAIN } from '../../../config/constants';

function* createAd(ad) {
  // Load Data
  const Network = new NetworkHandler();

  try {
    yield Network.post(`${DOMAIN}/ads`, ad.payload);
    yield put(
      success({
        message: 'Creation Successful',
      }),
    );
    yield put(push('/advert/list'));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load data, please try again.${errorMsg}`,
      }),
    );
  }
}

export default function* adSagas() {
  yield takeLatest(ACTIONS.CREATE_AD_REQUEST, createAd);
}
