// @ts-ignore
import React, {useState} from 'react';
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexContainer} from "../../components/FlexContainer.tsx";
import mockData from "@/mocks/mockData.json"
import {IconList} from "@/components/IconList.tsx";
import {useMediaQuery} from "react-responsive";
import {S} from "./Footer_styles.ts"
import {Contacts} from "@/components/contacts/Contacts.tsx";

const icons = mockData.icons

export const Footer = () => {
    const isTablet = useMediaQuery({ maxWidth: 768 })
    const isMobile = useMediaQuery({ maxWidth: 567 })
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClose = () => {
        setIsModalOpen(false);
    };
    return (
        <S.StyledFooter>
            <Container>
                <FlexContainer justify="space-between" align="center" wrap="wrap">
                    <S.StyledContacts>
                        <S.ContactContainer>
                            <SectionTitle fontsize={"22px"} fontWeight={"600"}>Call me:</SectionTitle>
                            <S.Contact href="tel:+7123456789">123-456-789</S.Contact>
                        </S.ContactContainer>

                        <S.ContactContainer aria-modal={true} as={"button"} style={{cursor: "pointer"}} onClick={() => setIsModalOpen(true)}>
                            <SectionTitle fontsize={"22px"} fontWeight={"600"}>Email:</SectionTitle>
                            <S.Contact
                                href="mailto:example@example.com?subject=Вопрос&body=Здравствуйте,">xxx@xyz.com</S.Contact>
                        </S.ContactContainer>
                    </S.StyledContacts>

                        <IconList icons={icons} gap={isMobile? "20px": isTablet? "30px": "35px"} isMobile={isMobile} isTablet={isTablet}/>


                </FlexContainer>
            </Container>

            {isModalOpen && (
                <S.ModalContacts onClick={()=> {
                    setIsModalOpen(false)
                }}>
                    <S.ModalContent onClick={(e) => e.stopPropagation()}>
                        <Contacts onClose={onClose}/>
                    </S.ModalContent>

                </S.ModalContacts>
            )}

        </S.StyledFooter>


    );
};

