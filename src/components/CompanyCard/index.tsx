import {
  Avatar,
  Box,
  Img,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MdLocationOn } from "react-icons/md";
interface CompanyProps {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  role: string;
  companyURL: string;
  companyLocation: string;
  remote: boolean;
  companyLogo: any;
  key: any;
}

export default function CompanyCard(props: CompanyProps) {
  return (
    <>
      <Box
        display={"flex"}
        alignItems="center"
        gap={3}
        justifyContent={"start"}
        maxWidth={"300px"}
        minWidth={"300px"}
        minHeight={"100px"}
        maxHeight={"100px"}
        bg={useColorModeValue("#d2d0d0","#33303d")}
        p={3}
        borderRadius={"10px"}
      >
        <Avatar src={props.companyLogo} />
        <Box>
          <Text fontWeight={"500"} fontSize={"13px"}>
            {props.role}
          </Text>
          <Link
            href={props.companyURL}
            fontWeight={"100"}
            fontSize={"12px"}
            target={"_blank"}
          >
            {props.title}
          </Link>
          <Text fontWeight={"400"} fontSize={"10px"}>
            {props.startDate} - {props.endDate}
          </Text>
          <Text
            fontWeight={"100"}
            fontSize={"10px"}
            display={"flex"}
            gap={1}
            alignItems={"center"}
          >
            <MdLocationOn size={"8px"} /> {props.companyLocation} - (
            {props.remote ? "Remoto" : "Presencial"})
          </Text>
        </Box>
      </Box>
    </>
  );
}
