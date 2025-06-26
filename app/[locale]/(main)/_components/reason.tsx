import Image from "next/image"
import { ReactNode } from "react"
export default function Reason({ src, title, text, className }: { src: string, title: string, text: string | ReactNode, className?: string }) {
    return (
        <div className={`flex flex-col justify-between text-white p-[80px] max-[1150px]:p-[40px] max-[600px]:px-[20px] ${className}`}>
            <div className="flex items-center mb-[40px]">
                <div className="flex-shrink-0 border-[1px] border-solid border-[#7D5AE680] shadow-[0px_4px_8px_0px_#4A5DE580] w-[88px] h-[88px] max-[600px]:w-[58px] max-[600px]:h-[58px] rounded-[10px] flex justify-center items-center bg-[linear-gradient(180deg,_#6A65FF_0%,_rgba(36,_36,_36,_0)_100%)]">
                    <Image src={src} alt={title} width={40} height={40} className="max-[600px]:w-[26px] max-[600px]:h-[26px]" />
                </div>
                <h3 className="ml-[20px] font-medium text-[26px] max-[600px]:text-[20px]">{title}</h3>
            </div>
            <p className="font-normal text-[16px] mb-[34px]">{text}</p>
        </div>
    )
}