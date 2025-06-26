import { ReactNode } from "react";

interface TeamMemberType {
    name: string,
    position: string,
    link: string,
    src: string,
    alt: string,
    text: string | ReactNode
}

export default TeamMemberType;