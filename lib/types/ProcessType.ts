import { ReactNode } from "react"

interface ProcessType {
    id: string,
    title: string,
    text: string | ReactNode
}

export default ProcessType