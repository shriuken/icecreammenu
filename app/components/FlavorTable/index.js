/* eslint-disable no-underscore-dangle */
/**
 *
 * FlavorTable
 *
 */

import React from 'react';

// import { Map } from 'immutable';

import PropTypes from 'prop-types';
// import styled from 'styled-components';

import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '../Button';

/* eslint-disable react/prefer-stateless-function */
class FlavorTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onCellBlur = this.onCellBlur.bind(this);
    this.renderEditable = this.renderEditable.bind(this);
    this.renderDeleteCell = this.renderDeleteCell.bind(this);
    this.renderDeleteCell2 = this.renderDeleteCell2.bind(this);
  }

  onCellBlur(e, cellInfo, dataKey) {
    const flavor = cellInfo.row._original;

    // refactor e.target.innerHTML at some point
    const modFlavor = flavor.set(dataKey, e.target.innerHTML);
    this.props.onEditFlavor(modFlavor);
  }

  renderEditableWrapper(dataKey) {
    return cellInfo => (
      <div
        style={{ backgroundColor: '#fafafa' }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => this.onCellBlur(e, cellInfo, dataKey)}
        /* dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id],
        }} */
      >
        {cellInfo.value}
      </div>
    );
  }

  // needs fixed so that way raw html doesn't get displayed in browser when attempting to do multi-line input using 'enter' for line breaks at input
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => this.onCellBlur(e, cellInfo)}
      >
        {cellInfo.value}
      </div>
    );
  }

  renderDeleteCell(cellInfo) {
    return (
      <button
        onClick={() => this.props.onDeleteFlavor(cellInfo.value)}
        type="button"
      >
        Delete
      </button>
    );
  }

  renderDeleteCell2(cellInfo) {
    return (
      <Button
        onClick={() => this.props.onDeleteFlavor(cellInfo.value)}
        text="Delete"
        positive={false}
      />
    );
  }

  render() {
    return (
      <ReactTable
        data={this.props.flavors.toArray()}
        columns={[
          {
            id: 'id',
            accessor: flavor => flavor.get('id'),
            show: false,
          },
          {
            // name
            id: 'flavor',
            Header: 'Flavor',
            accessor: flavor => flavor.get('name'),
            Cell: this.renderEditableWrapper('name'),
          },
          {
            // todo: needs some validation to ensure valid double
            // currency symbol would be nice too.
            // price
            id: 'price',
            Header: 'Price',
            accessor: flavor => flavor.get('price'),
            Cell: this.renderEditableWrapper('price'),
          },
          {
            // ingredients
            id: 'ingredients',
            Header: 'Ingredients',
            accessor: flavor => flavor.get('ingredients'),
            Cell: this.renderEditableWrapper('ingredients'),
          },
          {
            id: 'active',
            accessor: flavor => flavor.get('active'),
            show: false,
          },
          {
            id: 'delete',
            accessor: flavor => flavor.get('id'),
            Cell: this.renderDeleteCell2,
          },
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    );
  }
}

FlavorTable.propTypes = {
  flavors: PropTypes.object.isRequired,
  onEditFlavor: PropTypes.func.isRequired,
  onDeleteFlavor: PropTypes.func.isRequired,
};

export default FlavorTable;
