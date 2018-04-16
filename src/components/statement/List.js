import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListData from './ListData';
import ListDataCompact from './ListDataCompact';
import { filterDataStatement, filterDataStatementCompact } from '../../models/statement';

const List = (props) => {
  const { data, dataCompact, filterType } = props;

  return (
    <div className="card">
      <div className="card-header">Data List</div>
      <div className="card-body">
        {filterType === 'compact' ? (
          <ListDataCompact data={dataCompact} />
        ) : (
          <ListData data={data} />
        )}
      </div>
    </div>
  );
};

List.propTypes = {
  data: PropTypes.shape().isRequired,
  dataCompact: PropTypes.shape().isRequired,
  filterType: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  filterType: state.statement.filterType,
  data: filterDataStatement({
    data: state.statement.results,
    term: state.statement.filterItem
  }),
  dataCompact: filterDataStatementCompact({
    data: state.statement.results,
    term: state.statement.filterItem
  })
});

export default connect(mapStateToProps, null)(List);
