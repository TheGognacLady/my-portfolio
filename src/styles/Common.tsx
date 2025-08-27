import {themes} from "@/styles/Themes.styled.tsx";

type FontsType = {
    weight?: number
    lineHeight?: number
    color?: string
    family?: string
    Fmax?: number
    Fmin?: number
}


export const font = ({weight, lineHeight, color, family, Fmax, Fmin}: FontsType) => `
  font-weight: ${weight || 400};
  line-height: ${lineHeight || 1.2};
  color: ${color || themes.colors.font};
  font-family: ${family || "Poppins"};
  font-size: calc((100vw - 375px)/(1440 - 375) * (${Fmax } - ${Fmin}) + ${Fmin}px);
`