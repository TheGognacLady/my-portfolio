import styled from "styled-components";
import {themes} from "@/styles/Themes.styled.tsx";
import {FlexContainer} from "@/components/FlexContainer.tsx";
import {SectionTitle} from "@/components/SectionTitle.tsx";
import {font} from "@/styles/Common.tsx";

const StyledFooter = styled.footer`
    background-color: ${themes.colors.primary};
    display: flex;
    padding: 42px 0 42px;
    gap: 30px;
    
    @media ${themes.media.tablet} {
        padding: 30px 0 47px;
        ${FlexContainer} {
           flex-direction: column;
            align-items: center;
            gap: 56px;
        }
    }
    
`
const ModalContacts = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.7); // затемнённый фон
    z-index: 1000; // поверх всего
`


const ModalContent = styled.div`
    //padding: 30px;
    //border-radius: 12px;
    min-height: 50%;
    max-width: 50%;
    width: 90%;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    position: relative;

    border: 3px solid transparent;
    border-image: linear-gradient(90deg, #13ADC7 0%, #6978D1 67%, #945DD6 100%);
    border-image-slice: 1;
    border-radius: 50px 0px 50px 0px;
    
    // ${SectionTitle} {
    //     margin-bottom: 1.5rem;
    // }
    
   
`

const StyledContacts = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 163px;
    max-width: 457px;
    
    @media ${themes.media.tablet} {
        width: 100%;
        gap: 0;
    }
`
const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${SectionTitle} {
        ${font({weight: 600, Fmax: 20, Fmin: 18})};
    }
`
const Contact = styled.a`
    text-decoration: none;
    ${font({weight: 500, Fmax: 20, Fmin: 14})};
    color: ${themes.colors.font};
    // font-weight: 500;
    transition: ${themes.animation.transition};

    &:hover {
        color: transparent;
        background: linear-gradient(90deg, #13ADC7, #6978D1, #945DD6);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
export const S = {
    StyledFooter,
    StyledContacts,
    ContactContainer,
    Contact,
    ModalContacts,
    ModalContent,

}