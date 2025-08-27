// @ts-ignore
import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "@/components/SectionTitle.tsx";
import {IconWrapper} from "@/components/IconWrapper.tsx";
import {Icon} from "@/components/icon/Icon.tsx";
import {Container} from "@/components/Container.tsx";
import {FlexContainer} from "@/components/FlexContainer.tsx";
import {themes} from "@/styles/Themes.styled.tsx";
import {font} from "@/styles/Common.tsx";


const techs = [
    {title: "HTML", percent: "80%"},
    {title: "CSS,SASS", percent: "80%"},
    {title: "React", percent: "70%"},
    {title: "Styled components", percent: "60%"},
]
export const Technologies = () => {
    return (

        <StyledTechnologies id={"technologies"}>
            <Container>

                <SectionTitle fontsize={"46px"} fontWeight={"600"}
                              margin={"100px 0 70px"}>Technologies</SectionTitle>

                <FlexContainer flexDirection="column" justify={"flex-start"} alignContent={"center"}>

                    <ProgressWrapper>
                        {techs.map((item, index) => (
                            <Progress title={item.title} widthProgress={item.percent} key={index}/>
                        ))}
                    </ProgressWrapper>

                    <TitleWrapper>
                        <SectionTitle fontsize={"44px"} fontWeight={"600"} margin={"0 0 70px"}>Additional technologies and
                            skills</SectionTitle>
                    </TitleWrapper>

                    <IconWrapper gap={"50px"}>
                        <Icon iconId={"gitSkills"} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>
                        <Icon iconId={"githubSkills"} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>
                        <Icon iconId={"figmaSkills"} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>
                    </IconWrapper>

                    <IconWrapperAdaptive>
                        <Icon iconId={"gitSkills"} width={"60px"} height={"60px"} viewBox={"0 0 100 100"}/>
                        <Icon iconId={"githubSkills"} width={"60px"} height={"60px"} viewBox={"0 0 100 100"}/>
                        <Icon iconId={"figmaSkills"} width={"60px"} height={"60px"} viewBox={"0 0 100 100"}/>
                    </IconWrapperAdaptive>

                </FlexContainer>

            </Container>

        </StyledTechnologies>

    );
};

const StyledTechnologies = styled.section`

    display: flex;
    padding: 0 0 170px;
    
    ${SectionTitle} {
        ${font({weight: 600, Fmax: 46, Fmin: 32})};
    }
    
    @media ${themes.media.tablet} {
        padding: 0;
        ${IconWrapper} {
            margin: 80px 0 110px;
        }
    }
    @media ${themes.media.mobile} {
        ${IconWrapper} {
           display: none;
        }
    }
`

const ProgressWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 0 auto 120px;
    padding: 0 120px;
    
    @media ${themes.media.tablet} {
        padding: 60px 0 85px;
        margin: 0;
    }
    @media ${themes.media.mobile} {
        padding: 30px 0 85px;
        margin: 0;
    }

`

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 18px;
    background-color: #162950;
    border-radius: 83px;
    overflow: hidden;

`
type ProgressBarType = {
    widthProgress?: string
}
const ProgressBar = styled.div<ProgressBarType>`

    height: 100%;
    border-radius: 83px;
    background: linear-gradient(
            to right,
            #13ADC7 0%,
            #6978D1 67%,
            #945DD6 100%
    );

    width: ${props => props.widthProgress || "30%"}

`
type ProgressType = {
    widthProgress?: string
    title: string
}
export const Progress = ({widthProgress, title}: ProgressType) => {
    return (
        <StyledProgress>
            <SectionTitle fontsize={"24px"} fontWeight={"600"}>{title}</SectionTitle>
            <ProgressBarContainer>
                <ProgressBar widthProgress={widthProgress}/>
            </ProgressBarContainer>
        </StyledProgress>

    )
}

const StyledProgress = styled.div`
    min-height: 54px;
    
    ${SectionTitle} {
        ${font({weight: 600, Fmax: 24, Fmin: 22})};
    }
`

const TitleWrapper = styled(SectionTitle)`
   text-align: center;
`

const IconWrapperAdaptive = styled.div`
    display: none;
    gap: 30px;
    
    @media ${themes.media.mobile} {
        display: flex;
        margin: 45px 0 100px;
    }
`
