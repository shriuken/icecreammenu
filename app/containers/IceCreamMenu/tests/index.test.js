import React from 'react';
import { mount } from 'enzyme';
import { Map } from 'immutable';
// import { enzymeFind } from 'styled-components/test-utils';

import { IceCreamMenu } from '../index';

describe('<IceCreamMenu />', () => {
  it('renders', () => {
    const component = mount(
      <IceCreamMenu
        iceCreamMenu={Map()}
        onAddFlavor={jest.fn()}
        onEditFlavor={jest.fn()}
        onDeleteFlavor={jest.fn()}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  // Test functions passed in through props are called
});
