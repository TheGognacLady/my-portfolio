import {Letter} from "@/components/Letter.ts";

type ButtonTextPropsType = {
    text: string
}

export const ButtonText = (props: ButtonTextPropsType) => {
    return (
        props.text.split("").map((char, i) => (<Letter index={i} key={i}>
                                                                     {char === " " ? "\u00A0" : char}
                                                                    </Letter>))
    )
}