import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Roboto, Helvetica, sans-serif;
        margin: 80px;
    }
`;
