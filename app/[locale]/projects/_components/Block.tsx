import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

const Block = ({title, src, alt, linkname, link, text, className }: {title: string, src: string, alt: string, linkname: string, link: string, text: string | ReactNode, className: string}) => {
  return (
    <div className={`flex flex-col ${className}`}>
        <div className="p-8 border-b-[1px] border-t-[1px] border-[#6A65FF80]">
            <h2 className="font-medium text-[26px] max-smallest:text-[22px] leading-[31.47px] tracking-[0%] text-[#98989A]">{title}</h2>
        </div>
        <div className="px-16 max-smallest:px-8 max-small:px-12 py-8 flex flex-col gap-[30px]">
            <Image width={700} height={400} alt={alt} src={src} className="w-full"/>
            <div className="flex justify-between">
                <div className="flex flex-col gap-[10px]">
                    <h3 className="font-medium text-[24px] max-smallest:text-[18px] leading-[36px] tracking-[-0.6%] text-[#E6E6E6]">{linkname}</h3>
                    <div className="w-fit max-w-[400px] max-medium:max-w-[300px] max-[700px]:max-w-[200px] truncate pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[10px] rounded-[8px] bg-[#4A6ED1] font-normal text-[20px] max-smallest:text-[14px] max-smallest:max-w-[100px] leading-[30px] tracking-[-0.6%] text-[#FFFFFF]">{link}</div>
                </div>
                <div className="flex items-end">
                    <div className="btn w-[50] h-[50] rounded-[8px] p-[10px] bg-[#4A6ED1] flex items-center justify-center">
                        <Link href={link} legacyBehavior>
                            <a target="_blank">
                                <Image width={30} height={30} alt="arrow" src="/images/icons/projectsArrow.svg" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <p className="font-normal text-[18px] max-smallest:text-[14px] leading-[27px] tracking-[0%] text-[#98989A] pb-[50px]">{text}</p>
        </div>
    </div>
  )
}

export default Block