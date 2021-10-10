import { gql } from "@apollo/client";

const searchCreators = async (client) => {
  const { data: { creators = null } = {} } = await client
    .query({
      query: gql`
        query CreatorsQuery {
          creators {
            name
          }
        }
      `,
    })
    .then((result) => result);

  return {
    props: {
      creators,
    },
  };
};

export default searchCreators;
