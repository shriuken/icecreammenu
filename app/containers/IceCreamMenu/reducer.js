/*
 *
 * IceCreamMenu reducer
 *
 */

import { fromJS } from 'immutable';
// import { objectExpression } from '@babel/types';
import {
  DEFAULT_ACTION,
  ADD_FLAVOR,
  DELETE_FLAVOR,
  EDIT_FLAVOR,
} from './constants';

import data from './data-object.json';
// import data from './data-array.json';

const immData = fromJS(data);
const filteredData = immData.set(
  'flavorsById',
  immData.get('flavorsById').filter(flavor => flavor.get('active')),
);

export const initialState = filteredData;

/* export const initialState = Object.assign({}, immData, {
  flavorsById: immData
    .get('flavorsById')
    .filter(flavor => flavor.get('active')),
}); */

// need to rewrite all of these to use immutable js.
function iceCreamMenuReducer(state = initialState, action) {
  const jsonState = state.toJS();
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case ADD_FLAVOR:
    case EDIT_FLAVOR:
      // TODO: Refactor to use immutable.js
      return fromJS(
        Object.assign({}, jsonState, {
          flavorsById: Object.assign({}, jsonState.flavorsById, {
            [action.flavor.get('id')]: action.flavor.toJS(),
          }),
        }),
      );

    // eslint-disable-next-line no-duplicate-case
    case EDIT_FLAVOR:
      return Object.assign({}, state, {
        flavorsById: {
          ...state.flavorsById,
          [action.flavor.id]: action.flavor,
        },
      });

    case DELETE_FLAVOR:
      return state.set(
        'flavorsById',
        state.get('flavorsById').delete(action.flavorId),
      );

    default:
      return state;
  }
}

export default iceCreamMenuReducer;
