/**
 *
 * IceCreamMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Map } from 'immutable';
import styled from 'styled-components';

import injectReducer from 'utils/injectReducer';
import Button from '../../components/Button';

// import { state } from 'shelljs/src/common';
import { addFlavor, deleteFlavor, editFlavor } from './actions';
import makeSelectActiveFlavors from './selectors';
import reducer from './reducer';

import FlavorTable from '../../components/FlavorTable';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

/* eslint-disable react/prefer-stateless-function */
export class IceCreamMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onAddFlavorClick = this.onAddFlavorClick.bind(this);
  }

  onAddFlavorClick() {
    this.props.onAddFlavor(
      Map({
        id: new Date().getTime().toString(),
        name: '',
        price: '',
        ingredients: '',
        active: true,
      }),
    );
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>IceCreamMenu</title>
          <meta name="description" content="Description of IceCreamMenu" />
        </Helmet>
        <Title>Menu</Title>
        <FlavorTable
          flavors={this.props.iceCreamMenu}
          onEditFlavor={this.props.onEditFlavor}
          onDeleteFlavor={this.props.onDeleteFlavor}
        />
        <Button onClick={this.onAddFlavorClick} text="Add Flavor" positive />
      </div>
    );
  }
}

IceCreamMenu.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  iceCreamMenu: PropTypes.object.isRequired,
  onAddFlavor: PropTypes.func.isRequired,
  onEditFlavor: PropTypes.func.isRequired,
  onDeleteFlavor: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  iceCreamMenu: makeSelectActiveFlavors(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onAddFlavor: flavor => {
      dispatch(addFlavor(flavor));
    },
    onEditFlavor: flavor => {
      dispatch(editFlavor(flavor));
    },
    onDeleteFlavor: flavorId => {
      dispatch(deleteFlavor(flavorId));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'iceCreamMenu', reducer });

export default compose(
  withReducer,
  withConnect,
)(IceCreamMenu);
