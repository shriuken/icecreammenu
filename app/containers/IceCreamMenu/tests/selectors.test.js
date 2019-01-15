// import { fromJS } from 'immutable';
import { selectActiveFlavors } from '../selectors';
import { initialState } from '../reducer';

describe('selectIceCreamMenuDomain', () => {
  describe('selectActiveFlavors', () => {
    it('only selects flavors with active:true', () => {
      const flavors = selectActiveFlavors(initialState);
      const filtered = flavors.filter(flavor => flavor.get('active') === false);
      expect(filtered.size).toEqual(0);
    });
  });

  // write direct test for default selector. currently it's only indirectly tested because it's a part of selectActiveFlavors
});
