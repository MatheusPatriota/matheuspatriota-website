import { Box, Button, Link, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FiExternalLink } from "react-icons/fi";
interface ProjectTypes {
  name: string;
  description: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export default function ProjectCard(props: ProjectTypes) {
  const { t } = useTranslation();
  return (
    <Box
      display={"flex"}
      alignItems="center"
      gap={3}
      justifyContent={"start"}
      maxWidth={"300px"}
      minWidth={"300px"}
      minHeight={"100px"}
      maxHeight={"150px"}
      bg={useColorModeValue("#d2d0d0", "#33303d")}
      p={3}
      borderRadius={"10px"}
    >
      <Box>
        <Text fontWeight={"500"} fontSize={"13px"}>
          {props.name}
        </Text>
        <Text fontWeight={"400"} fontSize={"10px"} mt={2}>
          {props.description}
        </Text>
        <Link
          href={props.url}
          fontWeight={"100"}
          fontSize={"12px"}
          target={"_blank"}
          textDecoration={"none !Important"}
        >
          <Button
            bg={useColorModeValue("#ffffff", "#000000")}
            height={"50px"}
            mt={2}
            border={useColorModeValue("2px solid #000", "2px solid #fff")}
            display={"flex"}
            alignItems={"center"} 
            gap={2}
          >
            {t("source") as string} <FiExternalLink />
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
