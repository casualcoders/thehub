import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://host.docker.internal:4000/graphql/",
  cache: new InMemoryCache(),
});

export default client;
