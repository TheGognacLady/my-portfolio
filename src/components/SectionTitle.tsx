import styled from "styled-components";
import { themes} from "../styles/Themes.styled.tsx";

type SectionTitleSize = {
    fontsize?: string
    fontWeight?: string
    margin?: string
    padding?: string
}
export const SectionTitle = styled.h2<SectionTitleSize>`

    font-family: Poppins, sans-serif;
    font-size: ${props=> props.fontsize || "30px"} ;
    font-weight: ${props=> props.fontWeight || "normal"};
    color: ${themes.colors.font};
    margin:${props=> props.margin || "0"};
    padding: ${props=> props.padding || "0"};
    
    @media ${themes.media.tablet} {
        margin: 0;
    }
`