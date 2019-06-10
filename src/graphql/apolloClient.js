import { HttpLink } from 'apollo-boost';
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";


const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: "http://localhost:8000"
})

const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache
}).initQueryManager();

export default client;