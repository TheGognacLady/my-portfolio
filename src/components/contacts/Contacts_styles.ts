import styled from "styled-components";
import {themes} from "@/styles/Themes.styled.tsx";
import {font} from "@/styles/Common.tsx";

const StyledContacts = styled.section`
    //position: relative;
   
`

const Form = styled.form`
    max-width: 540px;
    min-height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 16px;
    margin: 0 auto;
    
    textarea {
        resize: none;
        height: 155px;
    }
`
const ContactsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & button {
        display: block;
        height: 0;
        padding-bottom: 50px;
        color: ${themes.colors.font};
        ${font({Fmax: 40, Fmin: 10, color: `${themes.colors.font}`})};
    }
    `

const Field = styled.input`
    width: 100%;
    //box-sizing: border-box;
    border: 1px solid ${themes.colors.borderColor};
    background-color: ${themes.colors.secondaryLight};
    padding: 7px 15px;

    color: ${themes.colors.font};
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-align: left;
    
    &::placeholder {
        font: ${themes.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    &:focus-visible {
      outline: 1px solid ${themes.colors.borderColor};  
    }
`
export const S = {
    StyledContacts,
    Form,
    Field,
    ContactsHeader
}