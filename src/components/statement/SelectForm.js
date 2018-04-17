import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByItem, filterByType } from '../../actions/statement';
import SelectItems from './SelectItems';

const SelectForm = (props) => {
  const {
    authorItems,
    filterItem,
    filterType
  } = props;
  const dataType = [
    {
      id: 'compact',
      name: 'Compact'
    }
  ];
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <SelectItems
                id="authorItems"
                label="Select item"
                data={authorItems}
                filter={e => props.filterByItem(e.target.value)}
                defaultValue={filterItem}
                isShowAll
              />
            </div>
            <div className="form-group mb-0">
              <SelectItems
                id="statementType"
                label="Select type"
                data={dataType}
                filter={e => props.filterByType(e.target.value)}
                defaultValue={filterType}
                isShowAll
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

SelectForm.propTypes = {
  authorItems: PropTypes.arrayOf(
    PropTypes.shape()
  ).isRequired,
  filterItem: PropTypes.string.isRequired,
  filterType: PropTypes.string.isRequired,
  filterByItem: PropTypes.func.isRequired,
  filterByType: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorItems: state.user.authorItems,
  filterItem: state.statement.filterItem,
  filterType: state.statement.filterType
});

export default connect(mapStateToProps, { filterByItem, filterByType })(SelectForm);
