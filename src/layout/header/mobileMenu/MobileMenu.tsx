// @ts-ignore
import React, {useState} from 'react';
import {S} from "./../HeaderMenu_styles.ts"
import {Menu} from "@/layout/header/menu/Menu.tsx";


export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <S.MobileMenuStyled>
            <S.BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} >
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={isOpen}>
               <Menu />
            </S.MobileMenuPopup>


        </S.MobileMenuStyled>
    );
};



