import styled from "styled-components";


type FlexContainerProps = {
    flexDirection?: string
    justify?: string
    align?: string
    wrap?: string
    alignContent?: string
    gap?: string



}
export const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    width: 100%;
    //height: 100%;
    flex-direction: ${props=> props.flexDirection || "row"};
    justify-content: ${props => props.justify || "space-between"};
    align-items: ${props => props.align || "center"};
    align-content: ${props=> props.alignContent || "center"};
    flex-wrap: ${props => props.wrap};
    gap: ${props => props.gap };
    
    position: relative;
    z-index: 1;
    
`