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

interface NavigationItemsProps {
  name: string;
  route: string;
}

export function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const navigationsItems: NavigationItemsProps[] = [
    {
      name: "Sobre",
      route: "/about",
    },
    {
      name: "Experiências",
      route: "/job-experience",
    },
    {
      name: "Projetos",
      route: "/projects",
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
              paddingBottom: "3px",
              borderBottom: `2px solid ${useColorModeValue("#000", "#fff")}`,
            }}
          >
            {navItem.name}
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
          height={"35px"}
          size={"30px"}
          _hover={{ opacity: 0.6 }}
          _active={{ opacity: 0.2 }}
        >
          <Img src={Brazil} width={"27px"} />
        </Button>
        <Button
          bg={useColorModeValue("#000", "#fff")}
          width={"45px"}
          height={"35px"}
          size={"30px"}
          _hover={{ opacity: 0.6 }}
          _active={{ opacity: 0.2 }}
          title="English"
        >
          <Img src={USA} width={"30px"} />
        </Button>
      </Box>
    </Box>
  );
}
