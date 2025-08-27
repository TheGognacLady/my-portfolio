// @ts-ignore
import React from 'react';
import {EllipseSprite} from "../../images/Ellipse.tsx";
import {SectionTitle} from "../SectionTitle.tsx";
import styled from "styled-components";
import {animateScroll as scroll} from 'react-scroll'

export const Logo = () => {
    return (
        <StyledLogo as={"a"} onClick={()=> {
            scroll.scrollToTop()
        }}>
                <EllipseSprite/>
            <SectionTitle>Portfolio</SectionTitle>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 13px;
    cursor: pointer;
    transition: 0.7s;

    &:hover {
        transform: scale(1.2);
        //filter: drop-shadow(3px 0 5px rgb(25, 118, 174));
        color: transparent;
        background: linear-gradient(90deg, #13ADC7, #6978D1, #945DD6);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }


`

