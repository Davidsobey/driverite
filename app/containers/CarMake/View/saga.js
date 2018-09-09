/**
 * Gets the repositories of the user from Github
 */

// import jwtDecode from 'jwt-decode';
import { put, takeLatest } from 'redux-saga/effects';

import * as ACTIONS from './constants';
import { loadAllCarMakeSuccess } from './actions';

import { error } from '../../../components/Alert/actions';
import NetworkHandler from '../../../net/NetworkHandler';
import { DOMAIN } from '../../../config/constants';

function* getAllCarMakes() {
  // Load Data
  const Network = new NetworkHandler();

  try {
    const makes = yield Network.fetch(`${DOMAIN}/carMakes`, null);
    yield put(loadAllCarMakeSuccess(makes));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load data, please try again.${errorMsg}`,
      }),
    );
  }
}

function* deleteCarMake() {
  // Load Data
  const Network = new NetworkHandler();

  try {
    const makes = yield Network.fetch(`${DOMAIN}/carMakes`, null);
    yield put(loadAllCarMakeSuccess(makes));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load data, please try again.${errorMsg}`,
      }),
    );
  }
}

export default function* carMakeSagas() {
  yield takeLatest(ACTIONS.GET_ALL_CAR_MAKES_REQUEST, getAllCarMakes);
  yield takeLatest(ACTIONS.DELETE_CAR_MAKES_REQUEST, deleteCarMake);
}
