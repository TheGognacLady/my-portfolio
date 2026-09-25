import styled from 'styled-components';
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
  @media (max-width: 800px) { grid-template-columns: 1fr; }
`;
const Card = styled.article`
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: clamp(24px, 3vw, 36px);
  background: #0f1624;
  border: 1px solid #354055;
  border-radius: 40px 0 40px 0;
  transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
  &:hover, &:focus-within {
    border-color: transparent;
    background: linear-gradient(#0f1624, #0f1624) padding-box, linear-gradient(110deg, #13adc7, #6978d1 67%, #945dd6) border-box;
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(4, 10, 22, 0.28);
  }
  .project-heading { display: flex; justify-content: space-between; align-items: center; gap: 16px; }
  .project-number { color: #aab5c8; font-size: 14px; }
  h3 { font-size: 30px; font-weight: 600; margin: 16px 0; letter-spacing: -0.035em; }
  .accent-line { width: 72px; height: 3px; border-radius: 4px; background: linear-gradient(90deg, #13adc7, #945dd6); margin-bottom: 24px; }
  .project-description { color: #c3cbd8; }
  .highlights { list-style: disc; padding-left: 20px; margin: 24px 0; color: #c3cbd8; font-size: 14px; }
  .highlights li + li { margin-top: 12px; }
  .highlights li::marker { color: #74cedc; }
  h4 { font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-bottom: 12px; }
  .project-stack { margin-bottom: 28px; }
  .project-bottom { margin-top: auto; }
  details, .project-note { margin-top: 20px; font-size: 13px; color: #b9c3d4; }
  summary { cursor: pointer; padding: 6px 0; }
  details p { margin-top: 8px; }
  code { color: #e4eaf3; overflow-wrap: anywhere; }
`;
export const S = { Grid, Card };
