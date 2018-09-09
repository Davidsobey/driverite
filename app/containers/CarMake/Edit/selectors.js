import { createSelector } from 'reselect';

/**
 * Direct selector to the edit state domain
 */
const selectEditDomain = state => state.get('edit');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Edit
 */

const makeSelectEdit = () =>
  createSelector(selectEditDomain, substate => substate.toJS());

export default makeSelectEdit;
export { selectEditDomain };
