// @ts-ignore
import React, {useEffect, useState} from 'react';
import {SectionTitle} from "@/components/SectionTitle.tsx";
import googlePhoto from "@/images/google_photo.png"
import {Button} from "@/components/Button.tsx";
import {Container} from "@/components/Container.tsx";
import {FlexContainer} from "@/components/FlexContainer.tsx";
import {S} from "./Project_styles.ts"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "react-multi-carousel/lib/styles.css";
import "./projects.css"
import { Fade } from "react-awesome-reveal";
import {ButtonText} from "@/components/ButtonText.tsx";


const array = [1, 2, 3, 4]
export const Projects: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const tabletBreakpoint = 768;

    useEffect(()=> {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize)
        return (
            ()=> {window.removeEventListener("resize", handleResize)}
        )

    }, [])

    const items =  array.map((item, index) => (
            <S.StyledProjectCard key={index}>
                <S.StyledPhoto src={googlePhoto} alt={"projectPhoto"}/>
                <SectionTitle fontsize={"30px"} fontWeight={"600"}
                              margin={"0 0 23px"}>PROJECT{item}</SectionTitle>
                <S.DecorationBar/>
                <S.ProjectText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</S.ProjectText>
                <Button width="200px">
                    <ButtonText text={"Look It Up"}/>
                </Button>
            </S.StyledProjectCard>))



    console.log(screenWidth)
    if(screenWidth < tabletBreakpoint){
        return (
            <S.StyledProjects id={"projects"}>
                <Container>
                    <SectionTitle fontsize={"46px"} fontWeight={"600"}
                                  margin={"0 0 70px"}>Projects</SectionTitle>
                    <FlexContainer wrap="wrap" gap={"40px"} justify="center">

                        <AliceCarousel
                            mouseTracking
                            items={items}

                        />


                    </FlexContainer>
                </Container>
            </S.StyledProjects>
        )
    }

    return (

        <S.StyledProjects id={"projects"}>
            <Container>
                <SectionTitle fontsize={"46px"} fontWeight={"600"}
                              margin={"0 0 70px"}>Projects</SectionTitle>
                <FlexContainer wrap="wrap" gap={"40px"} justify="center">
                    <Fade cascade={true} damping={0.3}>
                        {items}
                    </Fade>

                </FlexContainer>
            </Container>
        </S.StyledProjects>


    );
};


