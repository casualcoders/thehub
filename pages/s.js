import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function Results() {
  const { query } = useRouter();

  const CREATORS_QUERY = gql`
    query CreatorsQuery($name: String!) {
      creators(name: $name) {
        name
        url
      }
    }
  `;

  const { loading, error, data } = useQuery(CREATORS_QUERY, {
    variables: { name: query.s },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.creators.length > 0 ? (
        data.creators.map((item) => (
          <ul>
            <li>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            </li>
          </ul>
        ))
      ) : (
        <p>No Results Found</p>
      )}
    </div>
  );
}
