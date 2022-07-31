import { Box, Img, Link, Text } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../../components/NavBar";
import Matheus from "../../assets/matheus.jpg";
import { Footer } from "../../components/Footer";
import { useTranslation } from "react-i18next";
export function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <header style={{ height: "10%" }}>
        <NavBar />
      </header>
      <main style={{ height: "80%" }}>
        <Box
          display={"flex"}
          justifyContent="center"
          height={"100%"}
          alignItems={"center"}
        >
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
              >
                Kunumi
              </Link>
            </Text>
          </Box>
        </Box>
      </main>
      <footer style={{ height: "10%" }}>
        <Footer />
      </footer>
    </>
  );
}
