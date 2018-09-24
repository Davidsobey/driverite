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

function* editCarModel(carModel) {
  // Load Data
  const Network = new NetworkHandler();
  const url = `${DOMAIN}/carModels/${carModel.payload.id}`;

  try {
    yield Network.put(url, carModel.payload);
    yield put(
      success({
        message: 'Edit Successful',
      }),
    );
    yield put(push('/model/list'));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load data, please try again.${errorMsg}`,
      }),
    );
  }
}

export default function* carEditSagas() {
  yield takeLatest(ACTIONS.EDIT_CAR_MODEL_REQUEST, editCarModel);
}
