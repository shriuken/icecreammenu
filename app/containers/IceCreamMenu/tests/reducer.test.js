import { fromJS } from 'immutable';
import iceCreamMenuReducer from '../reducer';
import { addFlavor, deleteFlavor /* editFlavor */ } from '../actions';

import data from '../data-object.json';

const immData = fromJS(data);
const filteredData = immData.set(
  'flavorsById',
  immData.get('flavorsById').filter(flavor => flavor.get('active')),
);

const flavor = fromJS({
  id: 'uniqueStringThatsNotInDatabaseHopefully',
  name: "I can't believe it's not cinammon",
  price: 4.0,
  ingredients: 'cocoa powder, milk, sugar, salt',
  active: true,
});

describe('iceCreamMenuReducer', () => {
  it('uses mockdata', () => {
    expect(iceCreamMenuReducer(undefined, {})).toEqual(filteredData);
  });
  it('returns the initial state', () => {
    expect(iceCreamMenuReducer(undefined, {})).toMatchSnapshot();
  });
  it('handles the ADD_FLAVOR action', () => {
    const state = iceCreamMenuReducer(undefined, addFlavor(flavor));
    expect(state).toMatchSnapshot();
    expect(state.getIn(['flavorsById', flavor.get('id')])).not.toEqual(
      undefined,
    );
  });
  it('handles the delete flavor action', () => {
    const state = iceCreamMenuReducer(undefined, deleteFlavor('0'));
    expect(state).toMatchSnapshot();
    expect(state.getIn(['flavorsById', '0'])).toEqual(undefined);
  });

  // test edit flavor reducer here too.
});
