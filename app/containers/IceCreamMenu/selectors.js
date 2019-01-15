import { createSelector } from 'reselect';
import { initialState } from './reducer';

Object.filter = (obj, predicate) =>
  Object.assign(
    ...Object.keys(obj)
      .filter(key => predicate(obj[key]))
      .map(key => ({ [key]: obj[key] })),
  );

/**
 * Direct selector to the iceCreamMenu state domain
 */

const selectIceCreamMenuDomain = state =>
  state.get('iceCreamMenu', initialState);

/**
 * Other specific selectors
 */

const selectActiveFlavors = createSelector(
  [selectIceCreamMenuDomain],
  iceCreamMenu => {
    const output = iceCreamMenu
      .get('flavorsById')
      .filter(flavor => flavor.get('active'));
    // console.log(output.toJS());
    return output;
  },
);

/**
 * Default selector used by IceCreamMenu
 */

/* const makeSelectIceCreamMenu = () =>
  createSelector(selectIceCreamMenuDomain, substate => substate.toJS()); */

const makeSelectActiveFlavors = () =>
  createSelector(selectActiveFlavors, substate => substate); // substate.toJS() will return the props as plain JSON.

export default makeSelectActiveFlavors;
export { selectIceCreamMenuDomain, selectActiveFlavors };

/* 
export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }
)
*/
