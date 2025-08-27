import styled, {css} from "styled-components";
import {FlexContainer} from "@/components/FlexContainer.tsx";
import {themes} from "@/styles/Themes.styled.tsx";
import {Button} from "@/components/Button.tsx";
import {SectionTitle} from "@/components/SectionTitle.tsx";

const StyledProjects = styled.section`
    display: flex;
    width: 100%;
    //flex-wrap: wrap;
    padding: 100px 0 140px;
    height: 100%;
    //min-height: 1779px;

    ${FlexContainer} {
        row-gap: 60px;
    }
    
    @media ${themes.media.tablet} {
        padding: 70px 0 70px;

        ${FlexContainer} {
            //flex-direction: column;
            align-items: center;
            padding-top: 30px;
            justify-content: center;
        }
    }

    @media ${themes.media.mobile} {
        ${FlexContainer} {
            gap: 30px;
        }
    }

`

const BorderStyle = css`
    border: 3px solid transparent;
    border-image: linear-gradient(90deg, #13ADC7 0%, #6978D1 67%, #945DD6 100%);
    border-image-slice: 1;
`

const StyledProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${themes.colors.primary};

    & > *:not(:last-child) {
        align-self: center;
    }


    padding: 27px 27px 42px;
    border: 1px solid rgb(163, 157, 157);
    border-radius: 50px 0px 50px 0px;
    max-width: 550px;
    transition: ${themes.animation.transition};

    &:hover {
        ${BorderStyle};
    }
;

    // @media ${themes.media.mobile} {
    //     max-width: 345px;
    // }
    @media ${themes.media.tablet} {
        max-width: 550px;
    }

    @media ${themes.media.mobile} {

        > ${Button} {
            width: 295px;
            font-size: 18px;
            margin: 0px 25px 25px;
            align-self: center;
        }

        ${SectionTitle} {
            margin: 0px;
        }
    }

`

const StyledPhoto = styled.img`
    width: 100%;
    max-height: 280px;
    margin-bottom: 40px;
    border-radius: 24px 8px 8px 8px;

    @media ${themes.media.mobile} {
        margin-bottom: 30px;
    }
`

 const DecorationBar = styled.div`
    width: 300px;
    height: 4px;
    border-radius: 83px;
    margin-bottom: 40px;
    background: linear-gradient(270.00deg, rgb(19, 173, 199), rgb(105, 120, 209) 66.667%, rgb(148, 93, 214) 100%);

    @media ${themes.media.mobile} {
        margin: 30px 0 0;
    }
`
const ProjectText = styled.p`
    font-size: 18px;
    margin-bottom: 50px;
    color: ${themes.colors.font};

    @media ${themes.media.mobile} {
        margin: 30px 0px;
    }
`
export const S = {
    StyledProjects,
    StyledProjectCard,
    StyledPhoto,
    DecorationBar,
    ProjectText
}