import { Box, Img, Link, Text } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../../components/NavBar";
import Matheus from "../../assets/matheus.jpg";
import { Footer } from "../../components/Footer";
export function Home() {
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
              Engenheiro de Software na{" "}
              <Link
                href="https://kunumi.com"
                color={"green.300"}
                textDecoration={"underline"}
                fontFamily={"Fira Code, monospace;"}
                fontWeight={"500"}
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
