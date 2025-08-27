// @ts-ignore
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "@/components/icon/Icon.tsx";
import {animateScroll as scroll} from 'react-scroll'

export const GoTopBtn = () => {
    const [showGotopBtn, setShowGotopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", ()=> {
            if(window.scrollY > 200) {
                setShowGotopBtn(true)
            }
        })
    }, []);

    return (
        <>
            {showGotopBtn && (
                <StyledGoTopBtn onClick={()=> {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={"gotop"} height={"15"} width={"16"} viewBox={"0 0 15 16"}/>
                </StyledGoTopBtn>
            )}
        </>

    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    bottom: 10px;
    right: 15px;
    cursor: pointer;
`

