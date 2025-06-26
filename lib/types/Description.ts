import { ReactNode } from "react";

interface DescriptionBlock {
    text: string | ReactNode;
    src: string;
    alt: string;
  }
  
  interface DescriptionType {
    title: string;
    blocks: DescriptionBlock[];
    className: string;
  }

  export default DescriptionType;