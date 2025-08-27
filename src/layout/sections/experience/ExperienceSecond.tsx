import {Container} from "@/components/Container.tsx";
import styled from "styled-components";
import {themes} from "@/styles/Themes.styled.tsx";
import {SectionTitle} from "@/components/SectionTitle.tsx";
import React from "react";
import {font} from "@/styles/Common.tsx";

const years =  ["2017", "2019", "2021", "2023"];

export const ExperienceSecond = ()=> {
    return (
        <StyledExperience id={"experience"}>
            <Container>
                <SectionTitle margin={"100px 0 70px"}>Experience</SectionTitle>
                <ContentWrapper>
                    {years.map(year => (
                        <ContentItem year={year} key={year}/>
                    ))}
                </ContentWrapper>
            </Container>
        </StyledExperience>
    )
}

const StyledExperience = styled.section`
    min-height: 600px;
    padding: 0 0 140px;
    display: flex;
    align-items: center;
    
    ${SectionTitle} {
        ${font({weight: 600, Fmax: 46, Fmin: 32})};
    }
    
    @media ${themes.media.tablet} {
        padding-bottom: 0;
        ${SectionTitle} {
            margin-top: 70px;
        }
    }
    
`

const ContentItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
    padding: 10px;
    width: 220px;
    flex-grow: 1;
    flex-shrink: 1;
    //min-width: 220px;
    //max-width: 260px;
    border: 1px solid red;

    @media screen and (max-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        gap: 20px;
        padding: 10px 30px 0px;
    }
`

const DotItemText = styled.p`
    
    ${font({weight: 500, Fmax: 18, Fmin: 16, lineHeight: 1.5})};
    text-align: center;

    @media ${themes.media.tablet} {
        text-align: left;

        font-size: clamp(0.5rem, 2.5vw, 3rem);
        word-wrap: break-word;
        overflow-wrap: break-word;
    }
`

const Year = styled.span`
    color: ${themes.colors.font};
    font-weight: bold;
    position: relative;
    
    &::before {
        content: "";
        
        width: 25px;
        height: 25px;
        background-color: ${themes.colors.font};
        border-radius: 50%;
        
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 110%;
    }

    @media ${themes.media.tablet} {

        &::before {
            content: "";

            width: 25px;
            height: 25px;
            background-color: ${themes.colors.font};
            border-radius: 50%;

            position: absolute;
            left: -20px;
            top: 0;
        }
    }
`

type ContentItemProps = {
    year: string
}
const ContentItem = ({year}:ContentItemProps)=> {
    return (
        <ContentItemStyled>
            <Year>{year}</Year>
            <DotItemText>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DotItemText>
        </ContentItemStyled>
    )
}

const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    //flex-grow: 1;
    //flex-wrap: wrap;
    
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        position: absolute;

        display: inline-block;
        top: 45px;
        left: 11%;
        right: 11%;
        height: 8px;
        border-radius: 85px;

        background: linear-gradient(to right, #13ADC7 0%, #6978D1 67%, #945DD6 100%);
        z-index: -1;

    }
    
    @media ${themes.media.tablet} {
        flex-direction: column;
        align-items: flex-start;
        margin: 40px 0 100px;

        &::before {
            content: "";
            position: absolute;

            display: inline-block;
            top: 10px;
            left: 9px;
            //right: 11%;
            height: 100%;
            width: 5px;
            border-radius: 85px;

            background: linear-gradient(to right, #13ADC7 0%, #6978D1 67%, #945DD6 100%);
            z-index: -1;

        }
    }

`