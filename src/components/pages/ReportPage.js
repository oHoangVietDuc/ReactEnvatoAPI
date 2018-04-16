import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from '../statement/SearchForm';
import SelectForm from '../statement/SelectForm';
import List from '../statement/List';

const ReportPage = (props) => {
  const { loading } = props;
  return (
    <main className={`main-content ${loading && 'main-content--loading'} d-flex justify-content-center align-items-center`}>
      {loading && <div className="loader" />}
      <div className="container">
        <div className="sales-report">
          <div className="sales-report__filter">
            <SearchForm />
            <SelectForm />
          </div>
          <div className="sales-report__data">
            <List />
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  loading: state.statement.loading
});

ReportPage.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, null)(ReportPage);
