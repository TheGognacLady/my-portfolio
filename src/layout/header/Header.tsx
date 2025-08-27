// @ts-ignore
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { themes} from "../../styles/Themes.styled.tsx";
import {Logo} from "../../components/logo/Logo.tsx";

import {Container} from "../../components/Container.tsx";
import {FlexContainer} from "../../components/FlexContainer.tsx";
import mockData from '@/mocks/mockData.json';
import {MobileMenu} from "@/layout/header/mobileMenu/MobileMenu.tsx";
import {DesktopMenu} from "@/layout/header/desktopMenu/DesktopMenu.tsx";
import {IconList} from "@/components/IconList.tsx";


const icons = mockData.icons;




export const Header = () => {
    const [isWindowWidth, setIsWindowWidth] = useState(window.innerWidth);
    const tabletBreakpoint = 768;

    useEffect(() => {
        window.addEventListener("resize", () =>{
            setIsWindowWidth(window.innerWidth)
        })
        return () => {
            window.removeEventListener("resize", () =>{
                setIsWindowWidth(window.innerWidth)
            })
        }
    }, [])
    return (

    <StyledHeader>
        <Container>
            <FlexContainer justify="space-between" align="center" wrap="wrap">
                <Logo/>
                {/*<Menu items={items}/>*/}
                {/*<MobileMenu items={items}/>*/}

                {isWindowWidth > tabletBreakpoint ?
                <DesktopMenu  /> :
                <MobileMenu />
                    }
                {isWindowWidth > tabletBreakpoint &&
                    <IconList icons={icons} gap="25px" minWidth="149px" minHeight="32px"/>
                }

            </FlexContainer>
        </Container>

    </StyledHeader>




    );
};

const HiddenIconList = styled.div``

const StyledHeader = styled.header`
    background-color: ${themes.colors.primary};
    min-height: 100px;
    //padding-bottom: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
    
    @media ${themes.media.tablet} {
        ${HiddenIconList} {
            display: none;
        }
    }
    
`
