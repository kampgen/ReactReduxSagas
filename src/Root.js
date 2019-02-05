import React, { Component } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './store';
import App from './App'

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>
    );
  }
}

export default Root;
