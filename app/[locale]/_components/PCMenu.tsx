'use client'
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils/utils";

const PCMenu = ({ setMenuVisible, setTalkModalOpen }: { setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>, setTalkModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const t = useTranslations("app-toolbar");
    const pathname = usePathname();
    const pages = ['services', 'projects', 'process', 'pricing', 'about-us', 'careers']

    return (
        <>
            <header className="fixed top-0 left-0 z-50 bg-[var(--header-bg-color)] w-full flex justify-between items-center
                           px-[16px] h-[108px]
                           small:px-[30px]
                           medium:px-[80px] medium:h-[85px]
                           big:px-[162px] big:h-[100px]
            ">
                <Link href="/" legacyBehavior className="w-[178px] h-[60px]">
                    <a className="w-[118px] mr-4 h-[40px] smallest:w-[178px] smallest:h-[60px] self-center flex justify-center items-center">
                        <Image priority id="logo" src="/images/icons/Logo.svg" width={178} height={60} alt="Logo" />
                    </a>
                </Link>

                <nav>
                    <ul className="gap-[30px] max-small:hidden small:flex small:justify-between small:gap-[30px]">
                        {pages.map(e =>
                            <li key={e}>
                                <Link href={`/${e}`} legacyBehavior>
                                    <a className={cn('text-nowrap font-medium text-[18px] text-white hover:text-[var(--purple)] duration-200 transition-colors', { 'text-[var(--purple)]': pathname === `/${e}` })} dangerouslySetInnerHTML={{ __html: t.raw(e) }} />
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>

                <div className="flex items-center">

                    {/* Номер телефона - виден только на больших экранах */}
                    <a href="tel:+79998189636" className="text-white text-[16px] font-medium mr-[20px] hidden big:block">
                        +7 (999) 818-9636
                    </a>

                    <div className="nav-right flex justify-center items-center">
                        <button onClick={() => setTalkModalOpen(true)} className="text-nowrap border-white border-[1px] text-white rounded-[8px] px-[20px] py-[8px] text-[14px] smallest:px-[40px] smallest:text-[18px] flex justify-center items-center font-semibold">
                            {t("lets-talk")}
                        </button>
                    </div>

                    <div className="w-[46px] h-[46px] ml-[33px] block small:hidden">
                        <Image
                            priority
                            src="/images/elements/Button.svg"
                            alt="mobile menu"
                            width={46}
                            height={46}
                            className="w-full h-full cursor-pointer"
                            onClick={() => setMenuVisible(true)}
                        />
                    </div>
                </div>
            </header>

            {/* fake header for spacing */}
            <div className="invisible w-full
                px-[16px] h-[108px]
                small:px-[30px]
                medium:px-[80px] medium:h-[85px]
                big:px-[162px] big:h-[100px]
            "></div>
        </>
    )
}

export default PCMenu;
