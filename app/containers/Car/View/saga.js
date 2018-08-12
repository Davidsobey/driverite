/**
 * Gets the repositories of the user from Github
 */

// import jwtDecode from 'jwt-decode';
import { put, takeLatest } from 'redux-saga/effects';

import { error, success } from '../../../components/Alert/actions';
import * as ACTIONS from './constants';
import { loadAllRotations } from './actions';
import NetworkHandler from '../../../net/NetworkHandler';

function* getAllRotations() {
  const Network = new NetworkHandler();
  // Load Data
  try {
    const rotationInfo = yield Network.getAllRotation();
    // yield put(loadAllRotations(ACTIONS.ROTATION_DATA));
    yield put(loadAllRotations(rotationInfo));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load rotations, please try again.${errorMsg}`,
      }),
    );
  }
}

function* deleteRotation(action) {
  const Network = new NetworkHandler();
  // Load Data
  try {
    const val = yield Network.deleteRotationByID(action.payload);
    yield put(
      success({
        message: `Rotation ${val} deleted `,
      }),
    );
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to delete rotations, please try again.${errorMsg}`,
      }),
    );
  }
}

// function* loadUser(action) {
//   const { values } = action.payload;
//   const url = 'loadUser';
//   const options = {
//     method: 'GET',
//     body: JSON.stringify(values),
//     headers: {},
//   };
//   try {
//     const response = yield call(request, url, options);
//     yield put(userLoaded(response.payload));
//   } catch (errorMsg) {
//     yield put(error({ message: errorMsg }));
//   }
// }

// function* stopLogin(action) {
//   yield put(error({ message: action.payload.response.message }));
// }

/*
* Root saga manages watcher lifecycle
*/

export default function* rotationSagas() {
  yield takeLatest(ACTIONS.GET_ROTATIONS, getAllRotations);
  yield takeLatest(ACTIONS.DELETE_ROTATIONS, deleteRotation);
  // yield takeLatest(ACTIONS.LOGIN_FAILED, stopLogin);
}
