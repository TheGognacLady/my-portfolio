// @ts-ignore

import styled from "styled-components";


type Props = {
    gap?: string
    minWidth?: string
    minHeight?: string

}
export const IconWrapper = styled.ul<Props>`
    display: flex;
    padding-top: 12px;
    gap: ${props=> props.gap || "25px"};
    min-width: ${props=> props.minWidth || "25px"};
    min-height: ${props=> props.minHeight || "25px"};
`

