import React from 'react';
import { mount } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';
import { Map } from 'immutable';

import FlavorTable from '../index';

describe('<FlavorTable />', () => {
  it('renders', () => {
    const component = mount(
      <FlavorTable
        flavors={new Map()}
        onEditFlavor={jest.fn()}
        onDeleteFlavor={jest.fn()}
      />,
    );

    expect(component).toMatchSnapshot();
  });
  // Test for multiline input and make sure html is not being direct-set.
  // test data cell column data types
  // test input prop
  // test inpt prop data types
  // test data-related props render to the table
});
