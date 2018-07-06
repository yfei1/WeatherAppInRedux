import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

const API_KEY = '0f9d51978435a42b60965210b8db2be0';

class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = {
      term: ''
    };

  }
  onTermChange = (event) => {
    this.setState({ term: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forcast in your favorite cities!"
          className="form-control"
          value={this.state.term}
          onChange={this.onTermChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispathToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

function mapStateToProps(state) {
  
}

export default connect(null, mapDispathToProps)(SearchBar);
