import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjrt7i7mw5pjy0172i8non3yl'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default client;