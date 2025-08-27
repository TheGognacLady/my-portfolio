import {themes} from "@/styles/Themes.styled.tsx";
import styled from "styled-components";
import {FlexContainer} from "@/components/FlexContainer.tsx";
import {font} from "@/styles/Common.tsx";

const Photo = styled.img`
    width: 380px;
    height: 450px;
    object-fit: cover;
    border: 5px solid transparent;
    background: linear-gradient(90deg, #8643DC, #00C0FD) border-box;
    border-radius: 50px 0px 50px 0px;
    z-index: 1;
    
    @media ${themes.media.mobile} {
        width: 335px;
        height: 400px; 
    }
`
// const PhotoWrapper = styled.div`
//     position: relative;
//     z-index: 0;
//
//     &::before {
//         content: "";
//         display: block;
//         position: absolute;
//         background-image: url(${image});
//         top: 30%;
//         right: 0;
//         left: 0;
//         bottom: -22%;
//         opacity: 0.5;
//         z-index: -1;
//     }
// `


const StyledMain = styled.section`
    display: flex;
    //align-items: center;
    //justify-content: space-between;
    gap: 89px;
    padding-top: 130px;
    min-height: 700px;
    
    @media ${themes.media.tablet} {
        padding-top: 30px;
        ${FlexContainer} {
            flex-direction: column;
            
            > ${Photo} {
                order: -1;
            }
        }
        
    }

`

const InfoContainer = styled.div`
    display: flex;
    min-height: 297px;
    justify-content: space-between;
    flex-direction: column;

    @media ${themes.media.mobile}, ${themes.media.tablet} {
        margin: 50px 0 70px;
        align-items: flex-start;
    }
`




const StyledParagraph = styled.p`
    max-width: 482px;
    min-height: 81px;
    text-align: left;
    
    ${font({Fmax: 18, Fmin: 16, color: "rgb(188, 188, 188)"})};

    @media ${themes.media.mobile} {
        margin: 25px 0 40px;
    }
    
`



const MainTitle = styled.h1`
    ${font({Fmax: 54, Fmin: 36, weight: 600})};
    
    @media ${themes.media.tablet} {
        text-align: left;
        padding-top: 15px;
    }
`



const BackgroundImage = styled.img`
    position: absolute;
    top: 30%;
    //left: 65%;
    right: 0;
    bottom: -22%;
    opacity: 0.5;
   z-index: -1;
    
    @media ${themes.media.mobile} {
        top: 15%;
        left: 20%;
    }

`
export const S = {
    Photo,
    StyledMain,
    InfoContainer,
    StyledParagraph,
    MainTitle,
    BackgroundImage,
}