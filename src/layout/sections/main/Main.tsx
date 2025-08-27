// @ts-ignore
import React, {useState} from 'react';
import photo from "../../../images/Jane.jpg"
import {Button} from "@/components/Button.tsx";
import {Container} from "@/components/Container.tsx";
import {FlexContainer} from "@/components/FlexContainer.tsx";
import image from "../../../images/drawing.png"
import Typewriter from 'typewriter-effect';
import {S} from "./Main_styles.ts"
import Tilt from 'react-parallax-tilt';
import {ButtonText} from "@/components/ButtonText.tsx";

export const Main = () => {
    const [scale, setScale] = useState(1.15);
    return (
        <S.StyledMain id={"aboutme"}>
            <Container>
                <FlexContainer justify="space-between" align="center" >
                    <S.InfoContainer>
                        <S.MainTitle>
                            <p>Web developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Web Developer', 'Web Designer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                        <S.StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. </S.StyledParagraph>
                        <Button width="240px">
                            <ButtonText text={"Let’s Begin"}/>
                        </Button>
                    </S.InfoContainer>


                    <Tilt scale={scale} transitionSpeed={2500}>
                        <div className="background-stripes tilt-scale">
                        </div>
                        <S.Photo src={photo} alt="photo"/>
                    </Tilt>

                    {/*<S.Photo src={photo} alt="photo"/>*/}
                    <S.BackgroundImage src={image}/>
                </FlexContainer>
            </Container>
        </S.StyledMain>


    );
};

