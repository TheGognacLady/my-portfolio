// @ts-ignore
import React from 'react';
import styled from "styled-components";
import { themes} from "../../../styles/Themes.styled.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";

export const Experience = () => {
    return (


            <StyledExperience>
                <Container>
                    <SectionTitle fontsize={"46px"} fontWeight={"600"}
                                  margin={"100px 0 70px"}>Experience</SectionTitle>
                    <TimeLine/>
                    <DotItemTextWrapper>
                        {[1,2,3,4].map((item, index) => (
                            <DotItemText>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</DotItemText>


                        ))}
                    </DotItemTextWrapper>
                </Container>



            </StyledExperience>


    );
};

const StyledExperience = styled.section`
    //display: flex;
    padding: 0px 0 140px;
`

const TimeLineWrapper = styled.div`
    position: relative;
    //padding: 40px 0;
    max-width: 880px;
    margin: 0 126px 0;
`

const Line = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 8px;
    border-radius: 85px;

    background: linear-gradient(to right, #13ADC7 0%, #6978D1 67%, #945DD6 100%);
    z-index: 1;
`

const Dots = styled.div`
    display: flex;
    justify-content: space-between;

    & > :first-child {
        margin-left: -5px;
    }

    & > :last-child {
        margin-right: -6px;
    }

    position: relative;
    z-index: 2;
`
const DotItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 10px;
`

const Year = styled.div`
    color: ${themes.colors.font};
    font-weight: bold;
    //margin-bottom: 9px;
`
const Dot = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${themes.colors.font};
    border-radius: 50%
`

const DotItemTextWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-width: 220px;
    margin: 20px 0px 140px;
    gap: 34px;
    
`

const DotItemText = styled.p`
    color: ${themes.colors.font};
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    text-align: center;
    
    min-width: 220px;
    max-width: 260px;
    min-height: 135px;
    flex-basis: 220px;
    flex-grow: 1;
`


const years = ["2017", "2019", "2021", "2023"]

export const TimeLine = () => {
    return (
        <TimeLineWrapper>
            <Line/>
            <Dots>
                {years.map((year, index) => (
                    <DotItem key={index}>
                        <Year>{year}</Year>
                        <Dot/>
                    </DotItem>
                ))}
            </Dots>
        </TimeLineWrapper>
    )
}
