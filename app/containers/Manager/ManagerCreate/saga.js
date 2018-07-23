// import { take, call, put, select } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';
import * as ACTIONS from './constants';
import { error } from '../../../components/Alert/actions';
import NetworkHandler from '../../../net/NetworkHandler';

function* createManager(action) {
  const data = action.payload;
  const Network = new NetworkHandler();

  try {
    const response = yield Network.requestCreateManagerBy(data);
    if (!(response instanceof Error)) {
      yield put(
        error({
          message: response.data,
        }),
      );
    } else {
      yield put(
        error({
          message: 'Unable to create manager',
        }),
      );
    }
  } catch (errorMsg) {
    yield put(
      error({
        message: `Unable to create manager please try again.${errorMsg}`,
      }),
    );
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(ACTIONS.CREATE_MANAGER_ACTION, createManager);
}
