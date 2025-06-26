import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

const TeamMember = ({name, position, link, text, src, alt} : {name: string, position: string, link: string, text: string | ReactNode, src: string, alt: string}) => {
  return (
    <div className="flex flex-col gap-[30px] px-[40px] py-[35px] rounded-[45px] bg-[#F8F8F8] border-[1px] border-solid border-[#191A23] [box-shadow:0px_4px_15px_0px_#4A5DE580] [box-shadow:0px_4px_4px_0px_#00000040_inset] max-w-[500px] h-full">
        <div className="w-full flex justify-evenly items-center">
            <Image src={src} width={1050} height={1050} alt={alt} className="w-full h-auto max-w-[80px]"/>
            <div className="h-full flex flex-col justify-end ml-3">
                <h2 className="font-medium text-[20px] max-mui-md:text-[18px] max-smallest:text-[16px] text-[#000000]">{name}</h2>
                <p className="font-normal text-[18px] max-mui-md:text-[16px] max-smallest:text-[14px] text-[#000000]">{position}</p>
            </div>
            <div className="h-full flex justify-start items-start">
                <Link href={link} legacyBehavior>
                    <a target="_blank">
                        <Image src="/images/icons/linkedin.svg" width={30} height={30} className="min-w-[30px]" alt="linkedin"/>
                    </a>
                </Link>
            </div>
        </div>
        <hr className="border-[1px] border-solid border-[#000000]"/>
        <div className="font-normal text-[18px] max-mui-md:text-[16px] max-smallest:text-[14px] text-[#000000]">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default TeamMember