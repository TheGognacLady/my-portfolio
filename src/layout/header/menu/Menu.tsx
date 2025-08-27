// @ts-ignore
import React from 'react';
import {S} from "./../HeaderMenu_styles.ts"
import mockData from "@/mocks/mockData.json";

const items = mockData.items
export const Menu = () => {
    return (
        <ul>
            {items.map((item, index) => (<S.ListItem key={index}>
                <S.NavLink
                    to={item.href}
                    smooth={true}
                    activeClass="active"
                    spy={true} >
                    {item.title}
                    <S.Mask>
                        <span>{item.title}</span>
                    </S.Mask>
                    <S.Mask>
                        <span>{item.title}</span>
                    </S.Mask>
                </S.NavLink>
            </S.ListItem>))}
        </ul>


    );
};


