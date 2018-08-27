/**
 * Gets the repositories of the user from Github
 */

// import jwtDecode from 'jwt-decode';
import { put, takeLatest } from 'redux-saga/effects';

import * as ACTIONS from './constants';
import { loadAllCarModelsSuccess } from './actions';

import { error } from '../../../components/Alert/actions';
import NetworkHandler from '../../../net/NetworkHandler';
import { DOMAIN } from '../../../config/constants';

function* getAllCarModels() {
  // Load Data
  const Network = new NetworkHandler();

  try {
    const models = yield Network.fetch(`${DOMAIN}/carModels`, null);
    yield put(loadAllCarModelsSuccess(models));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load data, please try again.${errorMsg}`,
      }),
    );
  }
}

export default function* carModelSagas() {
  yield takeLatest(ACTIONS.GET_ALL_CAR_MODELS_REQUEST, getAllCarModels);
}
