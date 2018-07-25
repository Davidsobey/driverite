/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';

// 3rd Party Reducers
import { reducer as form } from 'redux-form/immutable';
import route from './containers/App/reducer';

// App Reducers
import user from './components/User/reducer';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route,
    form,
    user,
    ...injectedReducers,
  });
}
