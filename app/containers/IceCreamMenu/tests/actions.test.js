// import { Map, fromJS } from 'immutable';
import {
  /* defaultAction, */ addFlavor,
  // deleteFlavor,
  // editFlavor,
} from '../actions';
import {
  // DEFAULT_ACTION,
  ADD_FLAVOR,
  // EDIT_FLAVOR,
  // DELETE_FLAVOR,
} from '../constants';

describe('IceCreamMenu actions', () => {
  describe('Add Flavor', () => {
    const flavor = {
      id: '1',
      name: 'chocolate',
      price: 4.0,
      ingredients: 'cocoa powder, milk, sugar, salt',
      active: true,
    };
    const addFlavorExpect = {
      type: ADD_FLAVOR,
      flavor,
    };
    it('creates an action type ADD_FLAVOR ', () => {
      expect(addFlavor(flavor).type).toEqual(ADD_FLAVOR);
    });
    it('it returns the new flavor to add as well', () => {
      expect(addFlavor(flavor).flavor).toEqual(flavor);
    });
    it('has not had its shape modified.', () => {
      expect(addFlavor(flavor)).toEqual(addFlavorExpect);
    });
  });
});

// continue testing other actions in similar fashion. Include negative tests as well.
