import { Box, Img, Link, Text } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../../components/NavBar";
import Matheus from "../../assets/matheus.jpg";
import { Footer } from "../../components/Footer";
import { useTranslation } from "react-i18next";
import { PageStructure } from "../../components/PageStructure";
export function Home() {
  const { t } = useTranslation();
  return (
    <>
      <PageStructure>
        <Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Img
              src={Matheus}
              alt={"Imagem de Matheus Patriota"}
              width={"150px"}
              borderRadius={"20px"}
            />
            <Text fontSize={"60px"} fontWeight={"700"}>
              Matheus Patriota
            </Text>
            <Text fontSize={"20px"} fontWeight={"400"} fontStyle={"italic"}>
              {t("jobtitle") as string}
              <Link
                href="https://kunumi.com"
                color={"blue.300"}
                textDecoration={"underline"}
                fontFamily={"Fira Code, monospace;"}
                fontWeight={"500"}
                _hover={{
                  color: "blue.700",
                }}
                target={"_blank"}
              >
                Kunumi
              </Link>
            </Text>
          </Box>
        </Box>
      </PageStructure>
    </>
  );
}
