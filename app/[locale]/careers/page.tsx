import Banner from "@/components/banner"
import CarrersBlock from "./_components/CareersBlock"
import HeadText from "../_components/HeadText"
import OpeningsBlock from "./_components/OpeningsBlock"
import ElevatingBusiness from "../_components/ElevatingBusiness"
import OpeningsType from "@/lib/types/OpeningsType"
import CareersType from "@/lib/types/CareersType"
import Blur from "@/components/Blur"
import { getTranslations } from "next-intl/server"
import type { Metadata } from 'next'
import { strong } from "@/lib/utils/utils"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("careers");

  return {
    title: t("title"),
    description: t("description"),
  };
}

const Page = async () => {
    const t = await getTranslations("careers");

    const careers : CareersType[] = [
        {
            title: t('careerBlocks.0.title'),
            text: t.rich('careerBlocks.0.text', strong),
            className: "mui-md:border-r-[1px] mui-md:border-[#6A65FF80]"
        },
        {
            title: t('careerBlocks.1.title'),
            text: t.rich('careerBlocks.1.text', strong),
            className: ""
        },
        {
            title: t('careerBlocks.2.title'),
            text: t.rich('careerBlocks.2.text', strong),
            className: "mui-md:border-r-[1px] mui-md:border-[#6A65FF80]"
        },
        {
            title: t('careerBlocks.3.title'),
            text: t.rich('careerBlocks.3.text', strong),
            className: ""
        },
    ]

    const openings : OpeningsType[] = [
        {
            title: t('openings.0.title'),
            name: t('openings.0.name'),
            text: t.rich('openings.0.text', strong),
            src: "/images/icons/career1.svg",
            alt: "career"
        },
        {
            title: t('openings.1.title'),
            name: t('openings.1.name'),
            text: t.rich('openings.1.text', strong),
            src: "/images/icons/career2.svg",
            alt: "career"
        },
        {
            title: t('openings.2.title'),
            name: t('openings.2.name'),
            text: t.rich('openings.2.text', strong),
            src: "/images/icons/career3.svg",
            alt: "career"
        },
    ]

    return (
        <div className="px-[100px] font-inter max-mui-md:px-[60px] max-smallest:px-[20px]">
            <Banner
                priority
                className="mt-[20px] min-[600px]:mt-[60px]"
                src="/images/banners/faqs_banner.png"
                header={t('banner.header')}
                subHeader={t('banner.subHeader')}
            />
            <div className="flex flex-col gap-10 mt-[90px]">
                <div className="flex flex-col gap-4 pl-10">
                    <h1 className="font-semibold text-[48px] max-smallest:text-[26px] max-[400px]:text-[24px] max-mui-md:text-[32px] text-[#FFFFFF] max-smallest:leading-10">
                        {t('welcome.title')}
                    </h1>
                    <p className="font-normal text-[18px] max-smallest:text-[14px] text-[#E6E6E6] max-mui-md:text-[16px] opacity-75">
                        {t.rich('welcome.description', strong)}
                    </p>
                    <div className="mt-5 bg-[#4A6ED1] w-fit rounded-[8px] p-[12px_14px] gap-[10px] font-normal text-[18px] max-smallest:text-[14px] max-mui-md:text-[16px] text-[#FFFFFF]">
                        {t('welcome.tagline')}
                    </div>ca
                </div>
            </div>
            <div className="w-full grid grid-cols-2 grid-rows-2 mt-[50px] max-mui-md:grid-cols-1">
                {careers.map((item, index) => (
                    <CarrersBlock key={index} {...item} />
                ))}
            </div>
            <HeadText
                title={t('currentOpenings.title')}
                text={t.rich('currentOpenings.description', strong)}
            />
            <div className="flex flex-col">
                {openings.map((item, index) => (
                    <OpeningsBlock key={index} {...item} />
                ))}
            </div>
            <ElevatingBusiness />
            <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
                <Blur
                    color='#836FFF99'
                    right="-250px"
                    top="350px"
                    filter="blur(250px)"
                    className=" w-[500px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
                <Blur
                    color='#836FFF99'
                    left="-250px"
                    top="1000px"
                    filter="blur(250px)"
                    className=" w-[400px] h-[400px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
                <Blur
                    color='#836FFF99'
                    right="-250px"
                    top="1500px"
                    filter="blur(250px)"
                    className=" w-[400px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
                <Blur
                    color='#836FFF99'
                    left="-250px"
                    top="2000px"
                    filter="blur(250px)"
                    className=" w-[600px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
                <Blur
                    color='#9C08FFCC'
                    right="-250px"
                    top="2500px"
                    filter="blur(200px)"
                    className=" w-[400px] h-[400px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
                <Blur
                    color='#9C08FFCC'
                    left="-250px"
                    top="3100px"
                    filter="blur(200px)"
                    className=" w-[400px] h-[400px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
                />
            </div>
        </div>
    )
}

export default Page