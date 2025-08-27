import styled from "styled-components";
import { themes} from "../styles/Themes.styled.tsx";
import {font} from "@/styles/Common.tsx";

type ButtonProps = {
    width?: string
    height?: string
    fontSize?: string
    padding?: string
}
export const Button = styled.button<ButtonProps>`
    height: ${props=> props.height || "60px"};
    font-family: "Poppins", sans-serif;
    font-size: ${props=> props.fontSize || "20px"};
    color: ${themes.colors.font};
    width: ${props=> props.width};
    border-radius: 83px;
    padding: ${props=> props.padding || "0"};
    background: linear-gradient(270.00deg, rgb(19, 173, 199),rgb(105, 120, 209) 66.667%,rgb(148, 93, 214) 100%);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;;

    ${font({Fmax: 20, Fmin: 10, color: `${themes.colors.font}`})};
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
    
    //span {
    //    display: inline-block;
    //    transition: transform 0.3s ease;
    //}
    //&:hover span {
    //    transform: translateY(-5px);
    //}
`