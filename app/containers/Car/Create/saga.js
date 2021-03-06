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
import { loadAllCarModelsSuccess } from './actions';

function* createCar(car) {
  // Load Data
  const Network = new NetworkHandler();

  try {
    yield Network.post(`${DOMAIN}/cars/${car.payload.model}`, car.payload);
    yield put(
      success({
        message: 'Creation Successful',
      }),
    );
    yield put(push('/carphoto/create'));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to create car, please try again.${errorMsg}`,
      }),
    );
  }
}

function* getAllCarModels() {
  const Network = new NetworkHandler();

  try {
    const models = yield Network.fetch(`${DOMAIN}/carModels`, null);
    yield put(loadAllCarModelsSuccess(models));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load models, please try again. ${errorMsg}`,
      }),
    );
  }
}

export default function* carSagas() {
  yield takeLatest(ACTIONS.CREATE_CAR_REQUEST, createCar);
  yield takeLatest(ACTIONS.GET_ALL_CAR_MODELS_REQUEST, getAllCarModels);
}
