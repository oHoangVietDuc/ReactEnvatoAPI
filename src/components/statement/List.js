import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const List = (props) => {
  const { data } = props;

  return (
    <div className="card">
      <div className="card-header">Data List</div>
      <div className="card-body">
        {data && (
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Order ID</th>
                <th scope="col">Item ID</th>
                <th scope="col">Type</th>
                <th scope="col">Detail</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? data.map((item, index) => {
                const itemId = `${item.order_id}${index}`
                return (
                  (
                    <tr key={itemId}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.order_id}</td>
                      <td>{item.item_id}</td>
                      <td>{item.type}</td>
                      <td>{item.detail}</td>
                      <td>${item.amount}</td>
                    </tr>
                  )
                );
              }) : (
                <tr className="table-warning text-center">
                  <td colSpan="6">No data</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape()
  ).isRequired
}

const mapStateToProps = (state) => ({
  data: state.statement.results
});

export default connect(mapStateToProps, null)(List);
