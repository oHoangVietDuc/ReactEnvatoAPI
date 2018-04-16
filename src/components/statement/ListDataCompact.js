import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ListDataCompact = (props) => {
  const { data } = props;
  return (
    <div className="statementData">
      {data && (
        <table className="table table-bordered table-statement">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th className="d-none" scope="col">Order ID</th>
              <th scope="col">Item name</th>
              <th scope="col">Order date</th>
              <th scope="col">Amount</th>
              <th scope="col">Extends support</th>
              <th scope="col">- US Tax</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.statementList.length > 0 ? data.statementList.map((item, index) => (
                <tr key={item.order_id}>
                  <th scope="row">{index + 1}</th>
                  <td className="d-none">{item.order_id}</td>
                  <td className="table-statement__name">{item.type}</td>
                  <td>{moment(item.date).format('YYYY-MM-DD hh:ss')}</td>
                  <td>{item.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                  <td>{item.amount_extends_support.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                  <td>{item.us_rwt.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                  <td>{(item.amount + item.amount_extends_support).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                </tr>
              )) : (
              <tr className="table-warning text-center">
                <td colSpan="8">No data</td>
              </tr>
            )}
          </tbody>
          <tfoot className="table-statement__tfoot">
            <tr className="table-success">
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>Amount: {data.toltalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
              <td>Support: {data.toltalExtendsSupport.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
              <td>US Tax: {data.toltalUsTax.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
              <td>Total: {data.toltal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
            </tr>
          </tfoot>
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
            Toltal extends support: <span className="text-right">{data.toltalExtendsSupport.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            Toltal without extends support: <span className="color-secondary text-right">{data.toltalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            Toltal: <span className="color-secondary text-right">{data.toltal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>
          <hr/>
        </div>
      )}
    </div>
  );
};

ListDataCompact.propTypes = {
  data: PropTypes.shape().isRequired
}

export default ListDataCompact;
