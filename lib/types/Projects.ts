import { ReactNode } from "react";

export default interface Projects{
    title: string,
    src: string,
    alt: string,
    linkname: string,
    link: string,
    text: string | ReactNode,
    className: string
}