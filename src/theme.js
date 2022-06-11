import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color:${({ theme }) => theme.text};
        transition: background 0.2s ease-in, color 0.2s ease-in;
        /* font-family: 'DM Serif Display', sans-serif; */
    }
`;

export const lightTheme = {
    body: '#f1f1f1',
    text: '#121620',
    alt: 'purple',
    bodyAlt: '#121620',
    textAlt: '#f1f1f1',
    altAlt: '#faecd9',
};

export const darkTheme = {
    body: '#121620',
    text: '#f1f1f1',
    alt: '#faecd9',
    bodyAlt: '#f1f1f1',
    textAlt: '#121620',
    altAlt: 'purple',
};