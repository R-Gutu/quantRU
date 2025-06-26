import { ReactNode } from "react"

const HeadText = ({title, text}: {title: string, text: string | ReactNode}) => {
  return (
    <div className="p-10 flex flex-col gap-[16px]">
        <p className="font-semibold text-[48px] max-mui-md:text-[40px] max-smallest:text-[26px] leading-[58.09px] tracking-[0%] text-[#FFFFFF]">{title}</p>
        <p className="font-normal text-[18px] leading-[27px] max-mui-md:text-[16px] max-smallest:text-[14px] tracking-[-0.6%] text-[#E6E6E6] opacity-75">{text}</p>
    </div>
  )
}

export default HeadText