/**
 * Gets the repositories of the user from Github
 */

// import jwtDecode from 'jwt-decode';
import { put, takeLatest } from 'redux-saga/effects';

import * as ACTIONS from './constants';
import { loadAllAdsSuccess } from './actions';

import { error } from '../../../components/Alert/actions';
import NetworkHandler from '../../../net/NetworkHandler';
import { DOMAIN } from '../../../config/constants';

function* getAllAds() {
  // Load Data
  const Network = new NetworkHandler();

  try {
    const ads = yield Network.fetch(`${DOMAIN}/ads`, null);
    yield put(loadAllAdsSuccess(ads));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load rotations, please try again.${errorMsg}`,
      }),
    );
  }
}

export default function* adSagas() {
  yield takeLatest(ACTIONS.GET_ALL_ADS_REQUEST, getAllAds);
}
