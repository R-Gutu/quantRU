import Banner from "@/components/banner"
import Accordion from "./_components/accordion"
import HeadText from "../_components/HeadText"
import Blur from "@/components/Blur"
import { getTranslations } from "next-intl/server"
import ProcessType from "@/lib/types/ProcessType"
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("process");

  return {
    title: t("title"),
    description: t("description"),
  };
}

import ProjectForm from "@/components/projectForm"
import { strong } from "@/lib/utils/utils"

const ProcessPage = async () => {
  const t = await getTranslations("process");
  
  const process: ProcessType[] = [
    {
      id: t('items.0.id'),
      title: t('items.0.title'),
      text: t.rich('items.0.text', strong)
    },
    {
      id: t('items.1.id'),
      title: t('items.1.title'),
      text: t.rich('items.1.text', strong)
    },
    {
      id: t('items.2.id'),
      title: t('items.2.title'),
      text: t.rich('items.2.text', strong)
    },
    {
      id: t('items.3.id'),
      title: t('items.3.title'),
      text: t.rich('items.3.text',  strong)
    },
    {
      id: t('items.4.id'),
      title: t('items.4.title'),
      text: t.rich('items.4.text', strong)
    },
    {
      id: t('items.5.id'),
      title: t('items.5.title'),
      text: t.rich('items.5.text', strong)
    },
    {
      id: t('items.6.id'),
      title: t('items.6.title'),
      text: t.rich('items.6.text', strong)
    },
    {
      id: t('items.7.id'),
      title: t('items.7.title'),
      text: t.rich('items.7.text', strong)
    },
    {
      id: t('items.8.id'),
      title: t('items.8.title'),
      text: t.rich('items.8.text', strong)
    }
  ];

  return (
    <div className="px-[100px] max-mui-md:px-[40px] font-inter">
      <Banner
        className="mt-[20px] min-[600px]:mt-[60px]"
        priority
        src={t('banner.image')}
        header={t('banner.title')}
        subHeader={t('banner.subtitle')}
      />
      <HeadText
        title={t('header.title')}
        text={t.rich('header.text', strong)}
      />
      <div  
        className="flex flex-col gap-[30px] pb-[100px]">
        {process.map((item, index) => (
          <Accordion key={index} {...item} />
        ))}
      </div>
      <Banner
        src={t('callToAction.image')}
        header={t('callToAction.title')}
        subHeader={t.rich('callToAction.subtitle', strong)}
        button={t('callToAction.buttonText')}
        icon={t('callToAction.buttonIcon')}
      />
      <ProjectForm className="py-[100px] px-[20%] max-[1100px]:px-[40px]" />
      <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
        <Blur
          color="#836FFF99"
          left="-250px"
          top="350px"
          filter="blur(250px)"
          className="w-[500px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
        />
        <Blur
          color="#836FFF99"
          right="-250px"
          top="1000px"
          filter="blur(250px)"
          className="w-[400px] h-[400px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
        />
        <Blur
          color="#836FFF99"
          right="-250px"
          top="1900px"
          filter="blur(250px)"
          className="w-[400px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
        />
        <Blur
          color="#836FFF99"
          left="-250px"
          top="2300px"
          filter="blur(250px)"
          className="w-[600px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
        />
        <Blur
          color="#9C08FFCC"
          right="-250px"
          top="3200px"
          filter="blur(250px)"
          className="w-[500px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
        />
        <Blur
          color="#9C08FFCC"
          left="-250px"
          top="3800px"
          filter="blur(250px)"
          className="w-[500px] h-[400px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
        />
      </div>
    </div>
  )
}

export default ProcessPage