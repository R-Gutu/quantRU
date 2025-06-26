import { Link } from "@/i18n/routing"
import { getTranslations } from "next-intl/server";
import Image from "next/image"
import { ReactNode } from "react";
export default async function Review({ content, src, name, description, imgHeight=70, className, link }: { content: ReactNode, src: string, name: string, description: string, imgHeight?: number, className?: string, link: string }) {
    const t = await getTranslations("home");
    
    return (
        <div className={`px-[80px] max-[1500px]:px-[40px] max-[600px]:px-[20px] min-[1150px]:pt-[100px] max-[1150px]:py-[50px] flex flex-col justify-between ${className}`}>
            <p className="font-medium italic text-[25px] text-[#6DB9FF] max-[1800px]:text-[20px] max-[600px]:text-[18px] max-[600px]:mb-[24px]">❝{content}❞</p>
            <div className="mt-[5xp] flex items-center justify-between border-[1px] border-solid border-[#262626] p-[20px] rounded-[8px] bg-[#24242433] text-white">
                <div className="flex gap-[18px] items-center">
                    <Image src={src} alt={name} width={70} height={imgHeight} className={`w-auto h-[${imgHeight}px]`} />
                    <div>
                        <h2 className="font-medium text-[20px] max-[1800px]:text-[16px] max-[600px]:">{name}</h2>
                        <p className="font-normal text-[18px] max-[1800px]:text-[14px]">{description}</p>
                    </div>
                </div>
                {name.includes("Sarah") && (
                    <Link href={link} legacyBehavior>
                        <a className="btn max-[600px]:hidden text-nowrap text-white bg-[linear-gradient(89.13deg,_#836FFF_0.18%,_#4A5DE5_99.86%)] py-[18px] px-[20px] rounded-[8px] text-[18px] max-[1800px]:text-[14px] font-medium" target="_blank">
                            {t("reviewButton")}
                        </a>
                    </Link>
                )}
            </div>
        </div>
    )
}