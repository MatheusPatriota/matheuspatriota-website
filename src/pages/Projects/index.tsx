import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";
import { PageStructure } from "../../components/PageStructure";
import ProjectCard from "../../components/ProjectCard";

interface ProjectTypes {
  name: string;
  description: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}
export function Projects() {
  const [projects, setProjects] = React.useState([]);
  const { t } = useTranslation();
  const getPinnedRopositories = () => {
    axios("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: "bearer " + import.meta.env.VITE_GITHUB_API_KEY,
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
        console.log(response.data.data.user.pinnedItems.nodes);
        setProjects(response.data.data.user.pinnedItems.nodes);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  React.useEffect(() => {
    getPinnedRopositories();
  }, []);

  return (
    <PageStructure>
      <Box
        display="grid"
        flexWrap={"wrap"}
        gap={10}
        justifyContent="center"
        gridTemplateColumns={"1fr 1fr 1fr"}
      >
        <Text
          gridColumn={"1/-1"}
          justifyContent="center"
          display={"flex"}
          fontSize={"30px"}
          fontWeight={"700"}
          textTransform={"uppercase"}
        >
          {t("projectTitle") as string}
        </Text>

        {
          <>
            {projects.map((project: ProjectTypes, index: any) => (
              // console.log(project);
              <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                url={project.url}
                createdAt={project.createdAt}
                updatedAt={project.updatedAt}
              />
            ))}
          </>
        }
      </Box>
    </PageStructure>
  );
}
