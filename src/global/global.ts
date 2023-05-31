import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font: 400 14px "Poppins", sans-serif;
    }
    body{
        background-color: ${({ theme }) => theme.color.background};
    }
    a{
        text-decoration: none;
        &:visited{
            color: none;
        }
    }
`;
