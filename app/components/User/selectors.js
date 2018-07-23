/**
 * LoginPage selectors
 */

import { createSelector } from 'reselect';
import * as ROLES from './roles';

const hasRole = (roles, roleName) => roles.indexOf(roleName) !== -1;

const selectUser = state => state.get('user');

/**
 * Select the language locale
 */
export const selectUserRoles = () =>
  createSelector(selectUser, user => user && user.get('roles'));

export const selectIsGrad = () =>
  createSelector(
    selectUser,
    user =>
      (user && user.has('roles')
        ? hasRole(user.get('roles'), ROLES.GRAD)
        : false),
  );

export const selectIsManager = () =>
  createSelector(
    selectUser,
    user =>
      (user && user.has('roles')
        ? hasRole(user.get('roles'), ROLES.MANAGER)
        : false),
  );

export const selectIsGradManager = () =>
  createSelector(
    selectUser,
    user =>
      (user && user.has('roles')
        ? hasRole(user.get('roles'), ROLES.GRAD_MANAGER)
        : false),
  );
