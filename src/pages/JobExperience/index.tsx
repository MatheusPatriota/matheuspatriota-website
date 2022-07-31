import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import CompanyCard from "../../components/CompanyCard";
import { PageStructure } from "../../components/PageStructure";

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
}

export function JobExperience() {
  const { t } = useTranslation();
  const jobsExperience: CompanyProps[] = [
    {
      title: "Kunumi",
      startDate: "Maio, 2022",
      endDate: "Atualmente",
      description:
        "SOLUÇÕES EM INTELIGÊNCIA ARTIFICIAL ORIENTANDO ESTRATÉGIAS DE NEGÓCIOS, CIÊNCIA E TECNOLOGIA PARA SUPERAR DESAFIOS.",
      role: "Software Engineer",
      companyURL: "https://www.kunumi.com/",
      companyLocation: "Belo Horizonte",
      remote: true,
      companyLogo:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAADz8/N0dHSlpaXo6OjPz8/i4uKFhYWtra339/eZmZnS0tL4+PioqKiUlJRNTU3BwcFhYWFSUlLHx8cXFxeBgYFBQUGxsbE8PDxMTEyOjo7u7u4ICAjZ2dmenp5oaGgfHx8oKCg2NjbNjxyRAAADxklEQVR4nO2d6VYaQRBGWVzIKG5ARA1K9P3fMZaGiA3SXT1dm/nubyi459zUjHNmyGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAo5frHP472Ma8ZOt876pXlcevvn/0qwyyrc+7Q88WBcT8lNL7mIS/4yilv6NPhaWMZlb2MbosEhzPO0OksN+5RymeHgkL/whj6uMpOOxMzSpgUCw5HxUMzhb6hlGlpoSzD6U3JNB3D8kIZho9l01QMGYWWG54VTtMwLIqJadhld6ii4ZIpOCw4ETkvn6ZgeMc1zB/ySwvVMZxyBbOG5YXqGI5aGzIKjWnIKTSiYf48NLjhCXtYMENuodEMeTs0oCFzh8YzrCk0kmFdoYEMKwv1arg747Je0KPhTTqhvlCnhukfTz0KdWm4Sv8V1u5Qr4Y308/v5p+HOje8SN7cs1B3hov0+nTfQr0Zpku0u28g6MlQoFBXhot0h/Y5yns03Cm09w51ZniUvKnib3nXhr+lCvViuE7e0V01FPRgmO7QhoW6MBTboV4M18mr2xbqwFDoKO/GUHSHejBcJ6+cNi/U2HCZvLDxDjU3fNYoVMdwsPdz18mL2p2HGhjuu1FBqVAlw9OdD1XZoYqGO/cLpZ85EtmhmoaD7mL8wSS9gVSwUDXDg5TddBrXsM3VJseGwoXaG0ruUA+G8oUaGyoUamuoUailYce5LTqiIe+26ACGy8k24/GznqCKocDFF1+Gx6aCGobrb29oK2h9vRSGDXj69obyj5EaGyo8nGdquEov6kU3HM9PPsF84Na9If8h6WCGs2n+y4Q2VHve18rQqFA1w6vOTlDF0K5QJUPDQlUMzXaoluGlsZ+4oXGh4oYzyx26QdLQvlBC0PDE2u0dMcN7D4USUoY+CiWEDJ0USogY3lsf5beRMPRTKCFg6KhQornhVfnvSOnQ2vDBWmiHxobOCiWaGt56K5RoaeivUKKhYdUPY8rTzNDNeWhKK0OfhRKNDJ0WSjQxdLlDN7Qw9Fso0cDQcaFEb8O7X9YKGfoaTqwFsvQ0dF4o0cvQ9Q7d0MfQf6FED8MAhRLVhrfed+iGWsMYhRKVhtfW37ucKkP3R/ltagzjFEpUGAYqlGAb3kU4ym/DNYxVKME0DFYowTIMtUM3cAzjFUowDAMWShQbvkQslCg1VP5/ixpSaBi0UKLIMOQO3dB960LfyD9OGbjQNy4yfmF36AeHf1wneKHvHPgp2ZcgV5uyHH9B/EABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/nv+APnaP2KEPaTrAAAAAElFTkSuQmCC",
    },
    {
      title: "Alest Cosultoria",
      startDate: "Fevereiro, 2022",
      endDate: "Maio, 2022",
      description: "",
      role: "Lider do Time de Desenvolvimento(Tech Lead)",
      companyURL: "https://alest.com.br/",
      companyLocation: "São Paulo",
      remote: true,
      companyLogo:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQHKisxvejLuXw/company-logo_200_200/0/1519906554217?e=2147483647&v=beta&t=qOsExUarz5xt7wQtF_nI4pbzMSUkS2mgJpdAwcYA9gE",
    },
    {
      title: "Alest Cosultoria",
      startDate: "Janeiro, 2022",
      endDate: "Maio, 2022",
      description: "",
      role: "Full Cycle Developer",
      companyURL: "https://alest.com.br/",
      companyLocation: "São Paulo",
      remote: true,
      companyLogo:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQHKisxvejLuXw/company-logo_200_200/0/1519906554217?e=2147483647&v=beta&t=qOsExUarz5xt7wQtF_nI4pbzMSUkS2mgJpdAwcYA9gE",
    },
    {
      title: "Alest Cosultoria",
      startDate: "Junho, 2021",
      endDate: "Janeiro, 2022",
      description: "",
      role: "Full Stack Developer",
      companyURL: "https://alest.com.br/",
      companyLocation: "São Paulo",
      remote: true,
      companyLogo:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQHKisxvejLuXw/company-logo_200_200/0/1519906554217?e=2147483647&v=beta&t=qOsExUarz5xt7wQtF_nI4pbzMSUkS2mgJpdAwcYA9gE",
    },
    {
      title: "Etherion Digital",
      startDate: "Setembro, 2020",
      endDate: "Junho, 2021",
      description: "",
      role: "Software Engineer",
      companyURL: "https://etheriondigital.com.br/",
      companyLocation: "Belo Jardim",
      remote: true,
      companyLogo:
        "https://scontent.fcau19-1.fna.fbcdn.net/v/t1.6435-9/120061509_103934608139598_1896730839423689403_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKzEqjk2LYtd0spl2GYe_GC9vnODTeKlAL2-c4NN4qUIDK4zWicA0T-Dg4ObgSc4DptPSaN9xfN6UeoaiZXtyF&_nc_ohc=GD5cYdCHmF8AX9-HhOT&_nc_oc=AQnN_dCZjo1wX3gtrNyJmKwCRFMz7bvSRCrOMl2IPeZh3jPUYGUMX8r9f9ZKXbDtasI&_nc_ht=scontent.fcau19-1.fna&oh=00_AT9yEySTfzDypXTq6FRilpcz4n6wEz5kJOpxGCAIf-TneQ&oe=6309C66A",
    },
    {
      title: "Instituto Federal de Pernambuco(IFPE)",
      startDate: "fevereiro, 2020",
      endDate: "dezembro, 2020",
      description: "",
      role: "Desenvolvedor Mobile",
      companyURL: "https://www.ifpe.edu.br/campus/belo-jardim",
      companyLocation: "Belo Jardim",
      remote: true,
      companyLogo:
        "https://scontent.fcau19-1.fna.fbcdn.net/v/t1.18169-9/1958056_210654269134151_744531648_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEaks3f4tTTcz67wYYNGRXe5JyRPRJBc57knJE9EkFzngZQgU2gHRPKOsvItGi4Aw2Q1hVd3MNwDs-RdawFzLed&_nc_ohc=VMqfNWCfs-sAX-G7XUs&_nc_ht=scontent.fcau19-1.fna&oh=00_AT8Yul7jVx24d4_l_x8AE4YQI5yYQ4RLDy9G5KXDl9A2Xw&oe=630AF61B",
    },
  ];
  return (
    <>
      <PageStructure>
        <Box
          display="grid"
          flexWrap={"wrap"}
          gap={10}
          justifyContent="center"
          gridTemplateColumns={"1fr 1fr 1fr"}
        >
          <Text
            gridColumn={"1/-1"}
            justifyContent="center"
            display={"flex"}
            fontSize={"30px"}
            fontWeight={"700"}
            textTransform={"uppercase"}
          >
            {t("jobTitle") as string}
          </Text>
          {
            <>
              {jobsExperience.map((job: CompanyProps, index: any) => (
                <CompanyCard
                  title={job.title}
                  startDate={job.startDate}
                  endDate={job.endDate}
                  description={job.description}
                  role={job.role}
                  companyURL={job.companyURL}
                  companyLocation={job.companyLocation}
                  remote={job.remote}
                  companyLogo={job.companyLogo}
                  key={index}
                />
              ))}
            </>
          }
        </Box>
      </PageStructure>
    </>
  );
}
