import { ReactNode } from "react";
import Block from "./block";

interface DescriptionBlock {
  text: string | ReactNode;
  src: string;
  alt: string;
}

export default function Description({ title, blocks, className }: { title: string; blocks: DescriptionBlock[]; className?: string }) {
  return (
    <div className="max-mui-md:text-center">
      <h2 className="font-medium text-[28px] max-smallest:text-[24px] max-[400px]:text-[22px] max-mui-md:text-[26px] text-[#98989A] ml-10 max-mui-md:ml-0 my-10">{title}</h2>

      <div className={`grid grid-cols-2 mui-md:grid-cols-4 ${className}`}>
        <Block
          text={blocks[0].text}
          src={blocks[0].src}
          alt={blocks[0].alt}
          className="border-r-[1px] border-[#6A65FF80] max-mui-md:border-b-[1px]"
        />
        <Block
          text={blocks[1].text}
          src={blocks[1].src}
          alt={blocks[1].alt}
          className="mui-md:border-r-[1px] border-[#6A65FF80] max-mui-md:border-b-[1px]"
        />
        <Block
          text={blocks[2].text}
          src={blocks[2].src}
          alt={blocks[2].alt}
          className="border-r-[1px] border-[#6A65FF80]"
        />
        <Block
          text={blocks[3].text}
          src={blocks[3].src}
          alt={blocks[3].alt}
        />
      </div>
    </div>
  );
}

