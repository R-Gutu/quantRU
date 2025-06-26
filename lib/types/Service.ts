import { ReactNode } from "react";

  type Block = {
    text: string | ReactNode;
    src: string;
    alt: string;
  };
  
  type Description = {
    title: string;
    blocks: Block[];
    className: string;
  };

  type Header = {
    title: string,
    text: string | ReactNode,
    button: string
  }

 export default interface Service{
    header: Header,
    description: Description []
  }