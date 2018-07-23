import { createSelector } from 'reselect';

/**
 * Direct selector to the managerCreate state domain
 */
const selectManagerCreateDomain = state => state.get('managerCreate');

/**
 * Other specific selectors
 */

/**
 * Default selector used by ManagerCreate
 */

const makeSelectManagerCreate = () =>
  createSelector(selectManagerCreateDomain, substate => substate.toJS());

export default makeSelectManagerCreate;
export { selectManagerCreateDomain };
