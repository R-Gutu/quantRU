"use client"
import Image from "next/image"
import { ReactNode, useState } from "react"
import * as m from "motion/react-m"
import { accordionItemAnimation } from "@/lib/animations/accordionAnimation";

const Accordion = ({id, title, text} : {id: string, title: string, text: string | ReactNode}) => {
    const [active, setActive] = useState<boolean>(false);
    const onClickAccordion = () => {
        setActive(prev => !prev);
    };

    return (
        <m.div
            variants={accordionItemAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} 
            onClick={onClickAccordion} 
            className={`cursor-pointer px-[60px] py-[40px] max-mui-md:px-[40px] max-mui-md:py-[20px] max-smallest:px-[20px] flex flex-col gap-[30px] max-smallest:gap-[20px] rounded-[12px] transition-colors duration-200 ease-in-out ${
                active 
                    ? "bg-[linear-gradient(87.57deg,_#5D5FEF_1.02%,_#0A1A3F_143.1%)] shadow-[0px_5px_15px_0px_#9B6BFFB2] shadow-[inset_0px_4px_8px_0px_#00000040]"
                    : "bg-transparent border-[2px] border-[#E1E4ED]"
            }`}
        >
            <div className={`flex justify-between`}>
                <div className="flex gap-[25px] items-center max-smallest:gap-[10px]">
                    <div className="font-semibold text-[60px] max-mui-md:text-[50px] max-smallest:text-[40px] leading-[72.61px] tracking-[0%] text-[#B8B6FF]">{id}</div>
                    <h2 className="font-semibold text-[30px] max-mui-md:text-[28px] max-smallest:text-[18px] leading-[36.31px] tracking-[0%] text-[#E5E9F0]">{title}</h2>
                </div>
                <div className={`transition-transform ${active ? "rotate-45" : ""} flex items-center`}>
                    <Image width={30} height={30} className="w-[30px] min-w-[30px] max-smallest:w-[20px] max-smallest:min-w-[20px]" alt="cross" src="/images/icons/plus.svg"/>
                </div>
            </div>

            {/* Smooth Height Transition for Content */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <hr className="border-[1px] border-[#F5F5F5]" />
                <p className="w-full font-normal text-[22px] max-mui-md:text-[20px] max-smallest:text-[16px] leading-[26.63px] tracking-[0%] text-[#E5E9F0] mt-4">
                    {text}
                </p>
            </div>
        </m.div>
    );
};

export default Accordion;
