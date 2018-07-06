import React, { Component } from 'react';

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

export default SearchBar;
