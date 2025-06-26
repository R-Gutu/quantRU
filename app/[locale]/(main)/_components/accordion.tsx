'use client'
import { ReactNode, useState } from "react"
import { cn } from "@/lib/utils/utils";
import Cross from "./cross";

export default function Accordion({ question, answer, number, className }: { question: string, answer: string | ReactNode, number: string, className?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`px-[50px] max-[1500px]:px-[20px] py-[50px] max-[600px]:py-[34px] border-solid border-[#6A65FF] ${className}`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[30px]">
                    <div className={cn(
                        "relative flex justify-center items-center text-white text-[30px] max-[600px]:text-[24px] w-[80px] h-[80px] max-[600px]:w-[55px] max-[600px]:h-[55px] rounded-[12px] transition-all duration-300 border-solid border-[1px] border-[#fff0] overflow-hidden flex-shrink-0",
                        { "border-[#4c3da4] border-[1px] [box-shadow:0px_4px_8px_0px_#4A5DE580]": isOpen }
                    )}>
                        <span className={cn("absolute inset-0 transition-opacity duration-300 bg-[linear-gradient(180deg,_rgba(106,_101,_255,_0.2)_0%,_rgba(36,_36,_36,_0)_100%)] opacity-1", {"opacity-0": isOpen})}></span>
                        <span className={cn("absolute inset-0 transition-opacity duration-300 bg-[linear-gradient(180deg,_#6A65FF_0%,_rgba(36,_36,_36,_0)_100%)] opacity-0", {"opacity-1": isOpen})}></span>
                        <span className="relative">{number}</span>
                    </div>

                    <h2 className={cn("font-medium text-[22px] text-white duration-300 transition-colors max-[600px]:text-[16px]", { "text-[#6DB9FF]": isOpen })}>{question}</h2>
                </div>
                <div onClick={() => setIsOpen(p => !p)} className={cn("cursor-pointer p-[7px] w-[34px] h-[34px] duration-300 transition-transform will-change-transform", { "rotate-45": isOpen })}>
                    <Cross className={cn("fill-white duration-300 transition-colors", { "fill-[#6DB9FF]": isOpen })} />
                </div>
            </div>
            <div className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                <p className="ml-[110px] max-[600px]:ml-[85px] max-[600px]:text-[14px] font-normal text-[17.09px] text-[#E6E6E6] overflow-hidden">{answer}</p>
            </div>
        </div>
    )
}