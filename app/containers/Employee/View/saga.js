/**
 * Gets the repositories of the user from Github
 */

// import jwtDecode from 'jwt-decode';
import { put, takeLatest } from 'redux-saga/effects';

import { error } from '../../../components/Alert/actions';
import * as ACTIONS from './constants';
import { loadAllEmployeesSuccess } from './actions';
import NetworkHandler from '../../../net/NetworkHandler';
import { DOMAIN } from '../../../config/constants';

function* getAllEmployees() {
  // Load Data
  const Network = new NetworkHandler();

  try {
    const employees = yield Network.fetch(`${DOMAIN}/employees`, null);
    yield put(loadAllEmployeesSuccess(employees));
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to load employees, please try again.${errorMsg}`,
      }),
    );
  }
}

// function* stopLogin(action) {
//   yield put(error({ message: action.payload.response.message }));
// }

/*
* Root saga manages watcher lifecycle
*/

export default function* employeeSagas() {
  yield takeLatest(ACTIONS.GET_ALL_EMPLOYEES, getAllEmployees);
  // yield takeLatest(ACTIONS.LOGIN_FAILED, stopLogin);
}
