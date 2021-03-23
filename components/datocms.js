import { GraphQLClient } from "graphql-request";
import 'dotenv/config';

export function request({ query, variables, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_TOKEN}`
    }
  });
  return client.request(query, variables);
}