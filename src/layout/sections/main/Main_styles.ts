import styled from 'styled-components';
import drawing from '@/images/drawing.png';

const StyledMain = styled.section`
  padding: clamp(44px, 7vw, 100px) 0;
  background-image: url(${drawing});
  background-repeat: no-repeat;
  background-position: right center;
  background-size: min(50%, 520px);
  h1 { font-size: clamp(2.5rem, 5vw, 4rem); line-height: 1.12; font-weight: 600; letter-spacing: -0.055em; margin: 18px 0 24px; }
  .hero-dot { color: #59c9df; }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(30px, 6vw, 80px);
  @media (max-width: 700px) { grid-template-columns: 1fr; }
`;
const Intro = styled.p`
  max-width: 550px;
  color: #c3cbd8;
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 32px;
`;
const Photo = styled.img`
  width: 100%;
  max-width: 380px;
  height: auto;
  aspect-ratio: 38 / 45;
  object-fit: cover;
  border: 3px solid transparent;
  background: linear-gradient(120deg, #945dd6, #13adc7) border-box;
  border-radius: 50px 0 50px 0;
  justify-self: end;
  transition: transform 240ms ease;
  &:hover { transform: translateY(-3px) rotate(1deg); }
  @media (max-width: 700px) { justify-self: center; max-width: 320px; }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover { transform: none; }
  }
`;
export const S = { StyledMain, Content, Intro, Photo };
