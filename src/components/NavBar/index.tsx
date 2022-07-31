import React from "react";
import {
  Box,
  Button,
  Img,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import LogoDark from "../../assets/matheus_logo_dark.svg";
import LogoWhite from "../../assets/matheus_logo_white.svg";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import Brazil from "../../assets/brazil.png";
import USA from "../../assets/usa.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
interface NavigationItemsProps {
  name: string;
  route: string;
  enName: string;
}

export function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const [languageSelected, setLanguageSelected] = React.useState(
    localStorage.getItem("language") || "pt-br"
  );

  const navigationsItems: NavigationItemsProps[] = [
    {
      name: "Sobre",
      route: "/about",
      enName: "About",
    },
    {
      name: "Experiências",
      route: "/job-experience",
      enName: "Job Experience",
    },
    {
      name: "Projetos",
      route: "/projects",
      enName: "Projects",
    },
  ];

  return (
    <Box
      width={"100vw"}
      height={"100%"}
      p={8}
      display="flex"
      flexDirection={"row"}
      alignItems={"center"}
      gap={5}
      justifyContent={"space-around"}
    >
      <Box>
        <Img
          src={useColorModeValue(LogoDark, LogoWhite)}
          alt="Logo Matheus Patriota"
          w={"200px"}
          cursor="pointer"
          onClick={() => {
            navigate("/");
          }}
        />
      </Box>
      <Box
        display="flex"
        gap={5}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        height={"40px"}
        alignItems={"center"}
      >
        {navigationsItems.map((navItem, index) => (
          <Link
            key={index}
            href={navItem.route}
            _hover={{
              color: "blue.400",
              paddingBottom: "3px",
              borderBottom: `2px solid ${useColorModeValue("#000", "#fff")}`,
            }}
          >
            {localStorage.getItem("language") === "pt-br" ?navItem.name : navItem.enName}
          </Link>
        ))}
      </Box>
      <Box display={"flex"} gap={2} alignItems="center">
        <Button
          onClick={toggleColorMode}
          borderRadius={"50px"}
          height={"40px"}
          width={"40px"}
          size={"30px"}
          bg={useColorModeValue("#000", "#fff")}
          color={useColorModeValue("#fff", "#000")}
          title={"Mudar Tema"}
          _hover={{ opacity: 0.6 }}
          _active={{ opacity: 0.2 }}
        >
          {colorMode === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
        </Button>
        <Button
          bg={useColorModeValue("#000", "#fff")}
          title={"Português"}
          width={"45px"}
          opacity={languageSelected === "pt-br" ? 1 : 0.5}
          height={"35px"}
          size={"30px"}
          _hover={{ opacity: 0.6 }}
          _active={{ opacity: 0.2 }}
          onClick={() => {
            setLanguageSelected("pt-br");
            localStorage.setItem("language", "pt-br");
            i18n.changeLanguage("ptbr");
          }}
        >
          <Img src={Brazil} width={"27px"} />
        </Button>
        <Button
          bg={useColorModeValue("#000", "#fff")}
          width={"45px"}
          height={"35px"}
          size={"30px"}
          opacity={languageSelected === "en" ? 1 : 0.5}
          _hover={{ opacity: 0.6 }}
          _active={{ opacity: 0.2 }}
          title="English"
          onClick={() => {
            setLanguageSelected("en");
            localStorage.setItem("language", "en");
            i18n.changeLanguage("en");
          }}
        >
          <Img src={USA} width={"30px"} />
        </Button>
      </Box>
    </Box>
  );
}
