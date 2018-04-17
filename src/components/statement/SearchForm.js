import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import dataSites from '../../data/EnvatoSite';
import { fetchStatement } from '../../actions/statement';

class SearchForm extends React.Component {
  state = {
    data: {
      startDate: '',
      endDate: '',
      site: 'themeforest.net'
    },
    errors: {}
  };

  componentDidMount = () => {
    const today = Date.now();
    this.setState({
      data: {
        ...this.state.data,
        startDate: moment(today).format('YYYY-MM-DD'),
        endDate: moment(today).format('YYYY-MM-DD')
      }
    });
  }

  validate = data => {
    const errors = {};
    if (!data.startDate) errors.startDate = 'You must specify a start date.';
    if (!data.endDate) errors.endDate = 'You must specify a end date';
    if (!data.site) errors.site = 'You must specify a site';
    return errors;
  };

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.fetchStatement(this.state.data);
    }
  }

  render() {
    const { data, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label htmlFor="startDate" className="col-sm-4 col-form-label text-right">Start date</label>
                  <div className="col-sm-8">
                    <input
                      onChange={this.handleChange}
                      id="startDate"
                      className={`form-control ${errors.startDate && 'is-invalid'}`}
                      value={data.startDate}
                      name="startDate"
                      type="date"
                      required
                    />
                    {errors.startDate && <div className="invalid-feedback">{errors.startDate}</div>}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="endDate" className="col-sm-4 col-form-label text-right">End date</label>
                  <div className="col-sm-8">
                    <input
                      onChange={this.handleChange}
                      id="endDate"
                      className={`form-control ${errors.endDate && 'is-invalid'}`}
                      value={data.endDate}
                      name="endDate"
                      type="date"
                      required
                    />
                    {errors.endDate && <div className="invalid-feedback">{errors.endDate}</div>}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="type" className="col-sm-4 col-form-label text-right">Site</label>
                  <div className="col-sm-8">
                    <select
                      onChange={this.handleChange}
                      defaultValue={data.site}
                      className="custom-select"
                      name="site"
                      required
                    >
                      {dataSites.map((item, i) =>
                        <option key={item.id} value={item.key}>{item.value}</option>)}
                    </select>
                    {errors.site && <div className="invalid-feedback">{errors.site}</div>}
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-sm-8">
                    <button className="btn btn-primary" type="submit">
                      <i className="ion-stats-bars"/>Run report
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                  <label htmlFor="type" className="col-sm-4 col-form-label text-right">Type</label>
                  <div className="col-sm-8">
                    <select
                      className="custom-select"
                      name="type"
                      required
                    >
                      {dataSites.map((item, i) =>
                        <option key={item.id} value={item.key}>{item.value}</option>)}
                    </select>
                    {errors.site && <div className="invalid-feedback">{errors.site}</div>}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  fetchStatement: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  loadedUser: state.user.loaded
});

export default connect(mapStateToProps, { fetchStatement })(SearchForm);
