import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #ffffff;
        --text-color: #333333;
        --primary-color: #0097d7;
        --secondary-color: #241f21;
        --border-color: #e0e0e0;
        --console-background: #f5f5f5;
    }

    body.dark-mode {
        --background-color: #1e1e1e;
        --text-color: #f0f0f0;
        --primary-color: #0097d7;
        --secondary-color: #3a3a3a;
        --border-color: #444444;
        --console-background: #2d2d2d;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Play', sans-serif;
    }

    body {
        background-color: var(--background-color);
        color: var(--text-color);
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    a{
        text-decoration: none;
        color: var(--primary-color);
    }

    button {
        cursor: pointer;
    }

    input, select, textarea {
        background-color: var(--background-color);
        color: var(--text-color);
        border: 1px solid var(--border-color);
    }
`