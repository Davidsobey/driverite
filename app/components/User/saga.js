/**
 * Gets the repositories of the user from Github
 */

// import jwtDecode from 'jwt-decode';
import { Cookies } from 'react-cookie';
import { push } from 'react-router-redux';
import { put, takeLatest } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';

import { error, success } from '../../components/Alert/actions';

import * as ROUTES from '../../config/routes';
import * as ACTIONS from './constants';
// import { loadDecodedUser } from './actions';
import AuthMiddleware from '../../middlewares/AuthMiddleware';

function* login(action) {
  const cookies = new Cookies();
  const Auth = new AuthMiddleware();

  try {
    yield Auth.login(action.payload.username, action.payload.password);

    yield cookies.set('jwt', action.payload);
    const decodedUserID = jwtDecode(Auth.getToken());
    yield localStorage.setItem('user', JSON.stringify(decodedUserID));
    // yield put(loadDecodedUser(decodedUserID));
    yield put(
      success({
        message: 'Welcome to the DriveRite platform!',
      }),
    );

    //
    yield put(push(ROUTES.HOME));
  } catch (errorMsg) {
    yield put(
      error({ message: 'Unable to login, please try again!' }),
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

function* logout() {
  const cookies = new Cookies();
  yield cookies.remove('jwt');
  yield localStorage.clear();
  yield put(push(ROUTES.LOGIN));
}

/*
 * Root saga manages watcher lifecycle
 */
export default function* userSagas() {
  yield takeLatest(ACTIONS.REQUEST_LOGIN, login);
  // yield takeLatest(ACTIONS.USER_LOAD_DECODEDID, loadUser);
  // yield takeLatest(ACTIONS.LOGIN_FAILED, stopLogin);
  yield takeLatest(ACTIONS.LOGOUT, logout);
}
