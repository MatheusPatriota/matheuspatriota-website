import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";
import { PageStructure } from "../../components/PageStructure";
import MatheusProfileAbout from "../../assets/matheus_about.jpg";
import { useTranslation } from "react-i18next";
export function About() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <PageStructure>
        <Box>
          <Text
            fontSize={"62px"}
            fontWeight="700"
            textTransform={"uppercase"}
            fontFamily={"Fira Code, sans-serif"}
          >
            {t("aboutTitle") as string}
          </Text>
          <Box display={"flex"} flexDirection={"row"} gap={8}>
            <Img
              src={MatheusProfileAbout}
              alt={"foto de perfil matheus patriota"}
              width={"300px"}
              borderRadius={"20px"}
            />
            <Box maxWidth={"400px"}>
              <Text mb={2}>{t("aboutText1" as string)}</Text>
              <Text>{t("aboutText2" as string)}</Text>
            </Box>
          </Box>
        </Box>
      </PageStructure>
    </>
  );
}
