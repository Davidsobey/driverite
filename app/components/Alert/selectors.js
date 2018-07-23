import { createSelector } from 'reselect';

/**
 * Direct selector to the ports state domain
 */
const selectPortsDomain = state => state.get('ports');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Ports
 */

const makeSelectPorts = () =>
  createSelector(selectPortsDomain, substate => substate.toJS());

export default makeSelectPorts;
export { selectPortsDomain };
