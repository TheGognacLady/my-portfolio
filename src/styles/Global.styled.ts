import {createGlobalStyle} from "styled-components";
import {themes} from "./Themes.styled.tsx";

export const GlobalStyle = createGlobalStyle`
    *, 
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: 'Poppins', system-ui, Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${themes.colors.font};
        
        min-width: 375px;
            }

    p {
        margin: 0;
    }
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
        
    }
    
    section:nth-of-type(odd) {
        background-color: ${themes.colors.primary};
    }
    
    section:nth-of-type(even) {
        background-color: ${themes.colors.secondaryLight};
    }
`