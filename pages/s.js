import React from "react";
import client from "../apollo-client";

import searchCreators from "../http/repositories/creators";

export default function Results({ creators }) {
  return (
    <div>
      <p>No Results Found</p>
      {JSON.stringify(creators)}
    </div>
  );
}

export async function getStaticProps() {
  return searchCreators(client);
}
