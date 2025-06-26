import { ReactNode } from "react"

const TimelineBlock = ({id, title, text} : {id: string, title: string, text: string | ReactNode}) => {
  return (
    <div className="p-[30px] max-smallest:p-[20px] flex flex-col gap-[20px] border-t-[1px] border-[#6A65FF80]">
      <div className="w-full flex gap-[30px] items-center">
        <h2 className="text-[86px] max-smallest:text-[60px] font-[600] text-[#6A65FF]">{id}</h2>
        <h3 className="text-[28px] max-smallest:text-[20px] font-[600] text-[#FFFFFF] pb-[10px] border-b-[1px] border-[#6A65FF80]">{title}</h3>
      </div>
      <p className="text-[20px] max-smallest:text-[16px] text-[#98989A]">{text}</p>
    </div>
  )
}

export default TimelineBlock