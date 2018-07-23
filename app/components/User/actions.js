import * as ACTIONS from './constants';

export const login = values => ({
  type: ACTIONS.REQUEST_LOGIN,
  payload: values,
});

export const logout = () => ({
  type: ACTIONS.LOGOUT,
  payload: '',
});

export const loadDecodedUser = decodedUserID => ({
  type: ACTIONS.USER_LOAD_DECODEDID,
  payload: decodedUserID,
});
