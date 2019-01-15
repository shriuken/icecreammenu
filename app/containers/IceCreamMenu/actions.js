/*
 *
 * IceCreamMenu actions
 *
 */

import {
  DEFAULT_ACTION,
  ADD_FLAVOR,
  DELETE_FLAVOR,
  EDIT_FLAVOR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function addFlavor(flavor) {
  return {
    type: ADD_FLAVOR,
    flavor,
  };
}

export function deleteFlavor(flavorId) {
  // console.log('deleteFlavor');
  return {
    type: DELETE_FLAVOR,
    flavorId,
  };
}

export function editFlavor(flavor) {
  return {
    type: EDIT_FLAVOR,
    flavor,
  };
}
