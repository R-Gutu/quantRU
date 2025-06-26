import Image from "next/image"
import { Link } from "@/i18n/routing"
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";
export default async function Service({ src, title, text, className, ariaLabel }: { src: string, title: string, text: string | ReactNode, className?: string, ariaLabel?: string }) {
    const t = await getTranslations("home");
    return (
        <div className={`flex flex-col justify-between text-white p-[50px] max-[600px]:p-[20px]  ${className}`}>
            <div>
                <div className="flex  flex-col max-[600px]:flex-row max-[600px]:items-center max-[600px]:mb-[24px]">
                    <div className="flex-shrink-0 min-[600px]:mb-[40px] border-[1px] border-solid border-[#7D5AE680] shadow-[0px_4px_8px_0px_#4A5DE580] w-[88px] h-[88px] max-[600px]:w-[58px] max-[600px]:h-[58px] rounded-[10px] flex justify-center items-center bg-[linear-gradient(180deg,_#6A65FF_0%,_rgba(36,_36,_36,_0)_100%)]">
                        <Image src={src} alt={title} width={40} height={40} className="max-[600px]:w-[26px] max-[600px]:h-[26px]" />
                    </div>
                    <h3 className="max-[600px]:text-[20px] max-[600px]:ml-[14px] font-semibold text-[30px] max-[1600px]:text-[23px] min-[600px]:mb-[20px]">{title}</h3>
                </div>
                <p className="font-normal text-[16px] mb-[34px] text-[#C0C4CD]">{text}</p>
            </div>
            <Link href="/services" legacyBehavior aria-label={ariaLabel || ""} title={ariaLabel || ""}>
                <a className="max-[600px]:text-[14px] w-full h-[60px] text-[18px] font-medium  text-white flex justify-center items-center rounded-[8px] bg-[linear-gradient(89.13deg,_#836FFF_0.18%,_#4A5DE5_99.86%)] btn" aria-label={ariaLabel || ""} title={ariaLabel || ""}> <span className="sr-only">{ariaLabel || ""}</span> {t("serviceButton")}</a>
            </Link>
        </div>
    )
}