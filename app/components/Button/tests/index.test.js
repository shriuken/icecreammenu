import React from 'react';
import { shallow /* mount */ } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

import Button from '../index';

describe('<Button />', () => {
  it('renders positive', () => {
    const component = shallow(<Button positive onClick={jest.fn()} text="" />);
    expect(component).toMatchSnapshot();
  });
  it('renders negatively', () => {
    const component = shallow(
      <Button positive={false} onClick={jest.fn()} text="" />,
    );
    expect(component).toMatchSnapshot();
  });
  it('renders positive differently from negative', () => {
    const positive = shallow(<Button positive onClick={jest.fn()} text="" />);
    const negative = shallow(
      <Button positive={false} onClick={jest.fn()} text="" />,
    );
    expect(positive).not.toEqual(negative);
  });
  // test onClick event is called.
});
