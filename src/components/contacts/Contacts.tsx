// @ts-ignore
import React, {type ComponentRef, useRef} from 'react';
import emailjs from '@emailjs/browser';
import {S} from "./Contacts_styles.ts"
import {SectionTitle} from "@/components/SectionTitle.tsx";
import {Button} from "@/components/Button.tsx";
import {Container} from "@/components/Container.tsx";
import {BtnClosed} from "@/components/BtnClose.tsx";

type ContactType = {
    onClose: () => void;
}
export const Contacts = ({onClose}: ContactType) => {

    const form = useRef<ComponentRef<'form'>>(null);


    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_mdu89zf', 'template_1w7kn7w', form.current, {
                publicKey: 'qOTgHnLQNOfjcUXM4',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();


    };
    return (
        <S.StyledContacts>
            <Container>
                <S.ContactsHeader>
                    <SectionTitle>Contact me</SectionTitle>
                    <BtnClosed onClick={onClose}/>
                </S.ContactsHeader>

                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"Name"} name={"name"}/>
                    <S.Field required placeholder={"Email"} name={"email"}/>
                    <S.Field required placeholder={"Subject"} name={"subject"}/>
                    <S.Field required placeholder={"Message"} as={"textarea"} name={"message"}/>
                    <Button padding={"0 5px"} height={"3rem"} type={"submit"}>Send message</Button>
                </S.Form>
            </Container>

        </S.StyledContacts>
    );
};


