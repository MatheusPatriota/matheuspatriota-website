import axios from "axios";
import React from "react";
import { PageStructure } from "../../components/PageStructure";

export function Projects() {
  const getPinnedRopositories = () => {
    axios("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Authorization": "bearer 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",
          },
      data: JSON.stringify({
          query: ` {
              user(login: "MatheusPatriota") {
                pinnedItems(first: 6, types: REPOSITORY) {
                  nodes {
                    ... on Repository {
                      name
                      description
                      url
                      createdAt
                      updatedAt
                    }
                  }
                }
              }
            }`,
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  React.useEffect(() => {
    getPinnedRopositories();
  }, []);

  return <PageStructure>{}</PageStructure>;
}
