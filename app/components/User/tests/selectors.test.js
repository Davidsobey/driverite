import { fromJS } from 'immutable';
import { createStructuredSelector } from 'reselect';
import * as ROLES from '../roles';
import {
  selectIsLSP, selectIsOPS, selectIsIB, selectIsRM,
} from '../selectors';

describe('User Selector', () => {
  const state = fromJS({
    user: {
      roles: [],
    },
  });

  it('expect user to be LSP', () => {
    const stateWithLSPAsUserRole = state.setIn(['user', 'roles'], fromJS([ROLES.LSP]));

    const selectorState = createStructuredSelector({
      isLsp: selectIsLSP(),
    })(stateWithLSPAsUserRole);

    expect(selectorState.isLsp).toEqual(true);
  });

  it('expect user to be RM', () => {
    const stateWithLSPAsUserRole = state.setIn(['user', 'roles'], fromJS([ROLES.RM]));

    const selectorState = createStructuredSelector({
      isRM: selectIsRM(),
    })(stateWithLSPAsUserRole);

    expect(selectorState.isRM).toEqual(true);
  });

  it('expect user to be IB', () => {
    const stateWithLSPAsUserRole = state.setIn(['user', 'roles'], fromJS([ROLES.IB]));

    const selectorState = createStructuredSelector({
      isIb: selectIsIB(),
    })(stateWithLSPAsUserRole);

    expect(selectorState.isIb).toEqual(true);
  });

  it('expect user to be OPS', () => {
    const stateWithLSPAsUserRole = state.setIn(['user', 'roles'], fromJS([ROLES.OPS]));

    const selectorState = createStructuredSelector({
      isOps: selectIsOPS(),
    })(stateWithLSPAsUserRole);

    expect(selectorState.isOps).toEqual(true);
  });
});
