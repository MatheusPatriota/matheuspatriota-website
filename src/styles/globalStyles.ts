import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        height: "100vh",
      },
      "*": {
        fontFamily: "Fira Code, sans-serif",
      },
      "main":{
        padding: "10px"
      },
    },
  },
});

export { theme };
