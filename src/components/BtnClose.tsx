import styled from "styled-components";
import {themes} from "@/styles/Themes.styled.tsx";

export const BtnClosed = styled.button`

    position: relative;
    width: 40px;           /* можно менять, будет адаптивно с max-width */
    height: 40px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::before, &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;           /* длина перекрестия относительно кнопки */
        height: 2px;          /* толщина линии */
        background-color:${themes.colors.font};
    }
    &::before {
    transform:translate(-50%, -50%) rotate(45deg);
    }
    
    &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
    }
    
    ${themes.media.mobile} {
        width: 30px;
        height: 30px;

        &::before, &::after {
            width: 60%;
            height: 2px;
        }
        
    }
`