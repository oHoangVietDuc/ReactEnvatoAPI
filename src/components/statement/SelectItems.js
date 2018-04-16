import React from 'react';
import PropTypes from 'prop-types';

const SelectItems = (props) => {
  const {
    id,
    label,
    data,
    defaultValue,
    isShowAll
  } = props;
  return (
    <div className="row">
      <label htmlFor={id} className="col-sm-3 col-form-label text-right">{label}</label>
      <div className="col-sm-9">
        <select
          id={id}
          onChange={props.filter}
          defaultValue={defaultValue}
          className="custom-select"
          required
        >
          {isShowAll && <option value=''>All</option>}
          {data.map((item, i) =>
            <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
      </div>
    </div>
  );
}

SelectItems.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isShowAll: PropTypes.bool.isRequired,
  filter: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape()
  ).isRequired
};

export default SelectItems;
