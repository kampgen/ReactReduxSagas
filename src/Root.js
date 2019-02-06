import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './graphql/apollo';

class Root extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    );
  }
}

export default Root;
