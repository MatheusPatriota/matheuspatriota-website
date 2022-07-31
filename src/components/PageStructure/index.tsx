import { Box } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";

interface PageStructureProps {
  children: React.ReactNode;
}
export function PageStructure(props: PageStructureProps) {
  return (
    <Box height={"100vh"}>
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
          {props.children}
        </Box>
      </main>
      <footer style={{ height: "10%" }}>
        <Footer />
      </footer>
    </Box>
  );
}
