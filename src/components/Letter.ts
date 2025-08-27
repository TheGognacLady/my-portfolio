import styled, {keyframes} from "styled-components";
import {Button} from "@/components/Button.tsx";

const wave = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
`



export const Letter = styled.span<{index: number}>`
    display: inline-block;
    transition: transform 0.5s ease;
    
    ${Button}:hover & {
        animation: ${wave} 0.5s ease-in-out 1;
        animation-delay: ${({ index }) => index * 0.02}s;
        animation-fill-mode: forwards;
    }
    
`