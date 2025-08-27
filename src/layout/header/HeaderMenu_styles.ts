import {themes} from "@/styles/Themes.styled.tsx";
import styled, {css} from "styled-components";
import {Link} from "react-scroll";

const DesktopMenu = styled.nav`
    min-width: 412px;
    min-height: 25px;

    ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
        list-style: none;

    }

    @media ${themes.media.tablet} {
        display: none;
    }

`

const ListItem = styled.li`
    display: inline-block;
    position: relative;
    cursor: pointer;

    

`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    width: 100%;
    overflow: hidden;
    color: ${themes.colors.font};
    transition : ${themes.animation.transition};

    &:first-of-type {
        top: 0;
    }

    &:last-of-type {
        top: 50%;

        span {
            transform: translateY(-50%);
        }
    }

    span {
        display: inline-block;
        transition: transform 0.3s ease, background 0.3s ease;
    }

`

const textGradient = css`
    color: transparent;
    background: linear-gradient(90deg, #13ADC7, #6978D1, #945DD6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

`

const NavLink = styled(Link)`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: transparent;

    &::before {
        content: "";
        display: inline-block;
        height: 1px;
        //background-color: #7063ed;
        background: linear-gradient(270.00deg, rgb(19, 173, 199), rgb(105, 120, 209) 66.667%, rgb(148, 93, 214) 100%);

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
    }

    &:hover, &.active {

        &::before {
            transform: scale(1);
        }

        ${Mask}:first-of-type span {
            transform: skewX(12deg) translateX(3px);
            ${textGradient};
        }

        ${Mask}:last-of-type span {
            transform: translateY(-50%) skewX(12deg) translateX(-3px);
            ${textGradient};
        }
`




// MobileMenu

const MobileMenuStyled = styled.nav`
    display: none;

    @media ${themes.media.tablet} {
        display: block;
    }

`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    font-size: 20px;
    background-color: rgb(15, 22, 36, 0.9);
    //display: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-100%);
    transition: 0.7s ease-in-out;

    ul {
        display: flex;
        gap: 10px;
        justify-content: center;
        list-style: none;
        flex-direction: column;
        align-items: center;
        transition: 0.7s ease-in-out;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateX(0%);
        & ul {
            gap: 30px;
        }
    `}

`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width:40px;
    height: 40px;
    right: 5px;
    top: 3px;
    z-index: 99999999;
    
    &:hover {
        cursor: pointer;
    }


    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${themes.colors.font};
        position: relative;
        
        ${props=> props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${themes.colors.font};
            
            position: absolute;
            transform: translateY(-10px);

            ${props=> props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(-45deg) translateY(0);
        `}
        }
        
        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${themes.colors.font};

            position: absolute;
            right: 0;
            transform: translateY(10px);

            ${props=> props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(45deg) translateY(0);
                width: 36px;
        `}
        }
    }  
`


export const S = {
    DesktopMenu,
    NavLink,
    ListItem,
    Mask,
    textGradient,
    MobileMenuStyled,
    MobileMenuPopup,
    BurgerButton,
}