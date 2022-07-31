import { Box, Link } from "@chakra-ui/react";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import "./style.scss";

interface FooterLinkProps {
  name: string;
  url: string;
  icon: any;
}

export function Footer() {
  const footerLinks: FooterLinkProps[] = [
    {
      name: "Instagram",
      icon: AiFillInstagram,
      url: "https://instagram.com/matheusscpatriota",
    },
    {
      name: "YouTube",
      icon: AiFillYoutube,
      url: "https://www.youtube.com/channel/UCSAg9UO1FluaOwOyvRg2Xuw",
    },
    {
      name: "LinkedIn",
      icon: AiFillLinkedin,
      url: "https://www.linkedin.com/in/matheus-patriota/",
    },
    {
      name: "Github",
      icon: AiFillGithub,
      url: "https://github.com/MatheusPatriota",
    },
  ];
  return (
    <Box
      display={"flex"}
      flexDirection="row"
      gap={8}
      justifyContent="center"
      alignItems={"center"}
    >
      {footerLinks &&
        footerLinks.map((link, index: any) => (
          <Link
            href={link.url}
            display={"flex"}
            flexDirection="row"
            gap={2}
            justifyContent="center"
            alignItems={"center"}
            _hover={{
              color: "blue.400",
            }}
            target={"_blank"}
            key={index}
          >
            {<link.icon />}
            {link.name}
          </Link>
        ))}
    </Box>
  );
}
