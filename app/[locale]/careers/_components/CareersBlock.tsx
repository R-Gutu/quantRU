import { ReactNode } from "react"

const CareersBlock = ({title, text, className}: {title: string, text: string | ReactNode, className?: string}) => {
  return (
    <div className={`flex flex-col gap-[30px] p-[50px] border-t-[1px] border-t-[#6A65FF80] ${className}`}>
        <h2 className="text-[36px] text-[#6DB9FF] max-medium:text-[32px] max-mui-md:text-[26px] max-smallest:text-[20px]">{title}</h2>
        <hr className="border-[1px] border-[#6A65FF80]"/>
        <p className="text-[18px] text-[#98989A] max-mui-md:text-[16px] max-smallest:text-[14px]">{text}</p>
    </div>
  )
}

export default CareersBlock