import { ReactNode } from "react";

interface OpeningsType {
    title: string,
    name: string,
    text: string | ReactNode,
    src: string,
    alt: string
}

export default OpeningsType;