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
import { loadAllCarsSuccess } from './actions';

function* createCarPhoto(carPhoto) {
  // Load Data
  const Network = new NetworkHandler();

  try {
    yield Network.post(`${DOMAIN}/carPhotos/${carPhoto.payload.carID}`, carPhoto.payload);
    yield put(
      success({
        message: 'Upload Successful',
      }),
    );
    yield put(push('/carphoto/create'));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to upload photo, please try again.${errorMsg}`,
      }),
    );
  }
}

function* getAllCars() {
  const Network = new NetworkHandler();

  try {
    const cars = yield Network.fetch(`${DOMAIN}/cars`, null);
    yield put(loadAllCarsSuccess(cars));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load cars, please try again. ${errorMsg}`,
      }),
    );
  }
}

export default function* carPhotoSagas() {
  yield takeLatest(ACTIONS.CREATE_CAR_PHOTO_REQUEST, createCarPhoto);
  yield takeLatest(ACTIONS.GET_ALL_CARS_REQUEST, getAllCars);
}
