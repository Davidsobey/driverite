/**
 * Gets the repositories of the user from Github
 */

// import jwtDecode from 'jwt-decode';
import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import * as ACTIONS from './constants';
import { loadAllCarsSuccess, loadCarSuccess } from './actions';

import { error } from '../../../components/Alert/actions';
import NetworkHandler from '../../../net/NetworkHandler';
import { DOMAIN } from '../../../config/constants';

function* getAllCars() {
  // Load Data
  const Network = new NetworkHandler();

  try {
    const cars = yield Network.fetch(`${DOMAIN}/cars`, null);
    yield put(loadAllCarsSuccess(cars));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load rotations, please try again.${errorMsg}`,
      }),
    );
  }
}

function* getCar(carID) {
  // Load Data
  const Network = new NetworkHandler();

  try {
    const car = yield Network.fetch(`${DOMAIN}/cars/${carID.payload}`, null);
    yield put(loadCarSuccess(car));
    yield put(push('/car/edit'));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load data, please try again.${errorMsg}`,
      }),
    );
  }
}

export default function* carSagas() {
  yield takeLatest(ACTIONS.GET_ALL_CARS_REQUEST, getAllCars);
  yield takeLatest(ACTIONS.GET_CAR_REQUEST, getCar);
}
