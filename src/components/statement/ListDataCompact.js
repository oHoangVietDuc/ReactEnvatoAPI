import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ListDataCompact = (props) => {
  const { data } = props;
  return (
    <div className="statementData">
      {data && (
        <table className="table table-statement">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Order ID</th>
              <th scope="col">Item ID</th>
              <th scope="col">Type</th>
              <th className="table-statement__col-detail" scope="col">Detail</th>
              <th scope="col">Amount</th>
              <th scope="col">Order date</th>
            </tr>
          </thead>
          <tbody>
            {data.statementList.length > 0 ? data.statementList.map((item, index) => {
              const itemId = `${item.order_id}${index}`
              return (
                <tr key={itemId}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.order_id}</td>
                  <td>{item.item_id}</td>
                  <td>{item.type}</td>
                  <td>{item.detail}</td>
                  <td>{item.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                  <td>{moment(item.date).format('YYYY-MM-DD')}</td>
                </tr>
              );
            }) : (
              <tr className="table-warning text-center">
                <td colSpan="7">No data</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      {data && (
        <div className="statement-total">
          <hr/>
          <div className="d-flex justify-content-end align-items-center">
            Toltal refund: <span className="text-right">{data.toltalAmountRefund.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            Toltal without refund: <span className="text-right">{data.toltalAmountNoRefund.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            Toltal: <span className="text-right">{data.toltalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>
          <hr/>
        </div>
      )}
    </div>
  );
};

ListDataCompact.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape()
  ).isRequired
}

export default ListDataCompact;
