/**
 * Gets the repositories of the user from Github
 */

// import jwtDecode from 'jwt-decode';
import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import * as ACTIONS from './constants';
import { loadAllCarModelsSuccess, loadCarModelSuccess } from './actions';

import { error } from '../../../components/Alert/actions';
import NetworkHandler from '../../../net/NetworkHandler';
import { DOMAIN } from '../../../config/constants';

function* getAllCarModels() {
  // Load Data
  const Network = new NetworkHandler();

  try {
    console.log('Saga Load all car models');
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

function* getModel(modelID) {
  // Load Data
  const Network = new NetworkHandler();
  const url = `${DOMAIN}/carModels/${modelID.payload}`;

  try {
    const make = yield Network.fetch(url, null);
    yield put(loadCarModelSuccess(make));
    yield put(push('/model/edit'));
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
  yield takeLatest(ACTIONS.GET_CAR_MODEL_REQUEST, getModel);
}
