/**
 * Gets the repositories of the user from Github
 */

// import jwtDecode from 'jwt-decode';
import { put, takeLatest } from 'redux-saga/effects';

import { error } from '../../../components/Alert/actions';
import * as ACTIONS from './constants';
import { loadAllEmployees } from './actions';

function* getAllEmployees() {
  // Load Data
  try {
    // const employees = await this.fetch(api.DOMAIN + api.ROTATIONS_ALL, null);

    yield put(loadAllEmployees(ACTIONS.GET_ALL_EMPLOYEES));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load rotations, please try again.${errorMsg}`,
      }),
    );
  }
}

// function* deleteRotation(action) {
//   const Network = new NetworkHandler();
//   // Load Data
//   try {
//     const val = yield Network.deleteRotationByID(action.payload);
//     yield put(
//       success({
//         message: `Rotation ${val} deleted `,
//       }),
//     );
//   } catch (errorMsg) {
//     yield put(
//       error({
//         message: `Unable to delete rotations, please try again.${errorMsg}`,
//       }),
//     );
//   }
// }

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
  yield takeLatest(ACTIONS.GET_ALL_EMPLOYEES, getAllEmployees);
  // yield takeLatest(ACTIONS.DELETE_ROTATIONS, deleteRotation);
  // yield takeLatest(ACTIONS.LOGIN_FAILED, stopLogin);
}
