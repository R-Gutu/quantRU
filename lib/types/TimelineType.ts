import { ReactNode } from "react";

interface TimelineType {
    id: string,
    title: string,
    text: string | ReactNode
  }

  export default TimelineType;