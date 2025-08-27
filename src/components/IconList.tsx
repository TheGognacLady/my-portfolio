// @ts-ignore
import React from 'react';
import styled from "styled-components";
import {IconWrapper} from "@/components/IconWrapper.tsx";
import {Icon} from "@/components/icon/Icon.tsx";
import {useMediaQuery} from "react-responsive";
import {themes} from "@/styles/Themes.styled.tsx";


type IconListProps = {
    icons: string[]
    gap?: string
    minWidth?: string
    minHeight?: string
    isMobile?: boolean
    isTablet?: boolean
}
export const IconList = ({icons, gap, minWidth, minHeight}:IconListProps) => {

    const isTablet = useMediaQuery({ maxWidth: 768 })
    const isMobile = useMediaQuery({ maxWidth: 567 })
    return (
        <IconWrapper gap={gap} minWidth={minWidth} minHeight={minHeight}>
            {icons.map((icon, index) => (
                <li>
                    <IconLink
                        href={icon === "github" ? "https://github.com/TheGognacLady" : icon === "lkd" ?
                            "https://www.linkedin.com/in/el-camino-del-alma-a21695261/" : "https://t.me/MarijuanaJah"}>

                            <Icon iconId={icon} key={index} width={isMobile? "25px": isTablet? "35px" : "35px"} height={isMobile? "25px": isTablet? "35px" : "35px"} viewBox={"0 0 50 50"}/>
                    </IconLink>
                </li>


            ))}
        </IconWrapper>
    );
};

const IconLink = styled.a`
    svg {
        transition: ${themes.animation.transition}
    }

    &:hover svg {
        transform: scale(1.2);
        filter: drop-shadow(4px 4px 8px rgba(105, 120, 209, 0.3));
        //box-shadow: 4px 4px 8px rgba(105, 120, 209, 0.3);
    }


`



