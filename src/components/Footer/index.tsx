import { Box, Link } from "@chakra-ui/react";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

export function Footer() {
  return (
    <Box
      display={"flex"}
      flexDirection="row"
      gap={8}
      justifyContent="center"
      alignItems={"center"}
    >
      <Link
        href="https://instagram.com/matheusscpatriota"
        display={"flex"}
        flexDirection="row"
        gap={2}
        justifyContent="center"
        alignItems={"center"}
      >
        <AiFillInstagram />
        Instagram
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCSAg9UO1FluaOwOyvRg2Xuw"
        display={"flex"}
        flexDirection="row"
        gap={2}
        justifyContent="center"
        alignItems={"center"}
      >
        <AiFillYoutube />
        Youtube
      </Link>
      <Link
        href="https://www.linkedin.com/in/matheus-patriota/"
        display={"flex"}
        flexDirection="row"
        gap={2}
        justifyContent="center"
        alignItems={"center"}
      >
        <AiFillLinkedin />
        LinkedIn
      </Link>
      <Link
        href="https://github.com/MatheusPatriota"
        display={"flex"}
        flexDirection="row"
        gap={2}
        justifyContent="center"
        alignItems={"center"}
      >
        <AiFillGithub />
        GitHub
      </Link>
    </Box>
  );
}
