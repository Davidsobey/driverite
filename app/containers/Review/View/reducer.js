/*
 *
 * Review View reducer
 *
 */

import { fromJS } from 'immutable';
// import { isNumber } from 'util';

import * as ACTIONS from './constants';

const initialState = fromJS({});

// function filterById(id, delId) {
//   if (isNumber(id) && id !== 0 && id !== delId) {
//     return true;
//   }
//   return false;
// }

function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.GET_ALL_REVIEWS_REQUEST:
      return { ...state, reviewsLoading: true };
    case ACTIONS.GET_ALL_REVIEWS_SUCCESS:
      return { ...state, reviews: action.payload, reviewsLoading: false };

    // case ACTIONS.DELETE_ROTATIONS:
    //   return {
    //     ...state,
    //     rotations: state.rotations.filter(obj =>
    //       filterById(obj.id, action.payload),
    //     ),
    //   };
    // case ACTIONS.GET_ROTATION:
    //   return state;
    default:
      return state;
  }
}

export default reviewsReducer
;
