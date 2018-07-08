import React, { Component} from 'react';
import SearchBar from '../containers/search_bar';
import ForecastList from '../containers/forecast_list';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <ForecastList />
      </React.Fragment>
    );
  }
}
