import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Inter", sans-serif;
        margin: 80px;
    }

    button {
      font-family: inherit;
    }
`;
