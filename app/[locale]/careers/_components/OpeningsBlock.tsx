"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const OpeningsBlock = ({title, name, text, src, alt} : {title: string, name: string, text: string | ReactNode, src: string, alt: string}) => {
  const subject = encodeURIComponent("Support Request");
  const body = encodeURIComponent("Hello, I need help with...");
  const mailtoLink = `mailto:support@quant-apps.com?subject=${subject}&body=${body}`;

  return (
    <div className="max-mui-md:border-t-[1px] border-[#6A65FF80]">
        <h2 className="ml-[50px] my-[50px] max-smallest:my-[30px] text-[28px] max-mui-md:text-[26px] max-smallest:text-[22px] text-[#98989A]">{title}</h2>
        <div className="flex flex-col gap-[30px] p-[50px] max-smallest:p-[30px] mui-md:border-r-[1px] border-[#6A65FF80] max-w-[700px]">
            <div className="w-fit border-[1px] border-[#6A65FF80] rounded-[12px] p-[24px] shadow-[0px_4px_8px_0px_#4A5DE540] bg-gradient-to-b from-[#6A65FF] to-transparent">
                <Image 
                    src={src} 
                    alt={alt} 
                    width={40} 
                    height={40}
                    style={{ width: '40px', height: '40px' }}
                />
            </div>
            <div className="flex flex-col gap-[20px]">
                <h2 className="text-[24px] text-[#FFFFFF] max-mui-md:text-[22px]">{name}</h2>
                <p className="text-[18px] text-[#E6E6E6] opacity-75 max-mui-md:text-[16px] max-smallest:text-[14px]">{text}</p>
            </div>
            <Link 
                href={mailtoLink}
                legacyBehavior
            >
                <a href={mailtoLink}
                className="btn py-[18px] px-[16px] text-[18px] max-smallest:text-[16px] max-mui-md:py-[16px] max-smallest:py-[12px] text-[#FFFFFF] rounded-[8px] text-center bg-[linear-gradient(90deg,#8D139B_-111.43%,#841BA1_-78.76%,#6D32B1_-28.79%,#4958CC_34.63%,#2979E4_80.76%)]"
                >
                Apply Now
                </a>
            </Link>
        </div>
    </div>
  )
}

export default OpeningsBlock