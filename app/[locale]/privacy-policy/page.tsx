import { getTranslations } from "next-intl/server";
import Image from "next/image";
import ElevatingBusiness from "../_components/ElevatingBusiness";
import Banner from "@/components/banner";
import type { Metadata } from 'next'
import { strong } from "@/lib/utils/utils";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("privacy-policy");

  return {
    title: t("title"),
    description: t("description"),
  };
}

const Page = async () => {
  const t = await getTranslations("privacy-policy");
  <h1 className="sr-only">{t("title")}</h1>
  const contactInfo = [
    {
      icon: "/images/icons/email.svg",
      text: t('contactInfo.email'),
      alt: "email"
    },
    {
      icon: "/images/icons/phone.svg",
      text: t('contactInfo.phone'),
      alt: "phone"
    },
    {
      icon: "/images/icons/geolocation.svg",
      text: t('contactInfo.location'),
      alt: "geolocation"
    }
  ];

  return (
    <div className="px-[100px] max-small:px-[40px] max-smallest:px-[20px] font-inter">
      <Banner
        priority
        src="/images/banners/faqs_banner.png"
        header={t('banner.header')}
        subHeader={t('banner.subHeader')}
      />
      <div className="flex max-mui-md:grid gap-[30px] items-center justify-center my-[50px] text-[18px] max-smallest:text-[14px] text-[#E6E6E6] max-small:text-[16px]">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex gap-[10px] max-mui-md:min-w-[400px] max-smallest:min-w-[0px] p-[20px] rounded-[8px] border-[1px] border-[#6A65FF80] items-center justify-center">
            <Image src={info.icon} width={30} height={30} alt={info.alt} />
            <p>{info.text}</p>
          </div>
        ))}
      </div>
      <div className="text-[20px] max-mui-md:text-[18px] max-smallest:text-[16px] text-[#FFFFFF] flex flex-col gap-[20px]">
        <p className="indent-6">{t('intro')}</p>

        <p className="indent-6">
          <strong>{t('sections.acceptance.title')}</strong><br/>
          {t('sections.acceptance.content')}
        </p>

        <p className="indent-6">
          <strong>{t('sections.services.title')}</strong><br/>
          {t.rich('sections.services.content', strong)}
        </p>

        <p className="indent-6">
          <strong>{t('sections.intellectual.title')}</strong><br/>
          {t('sections.intellectual.content')}
        </p>

        <p className="indent-6">
          <strong>{t('sections.conduct.title')}</strong><br/>
          {t('sections.conduct.content')}
        </p>

        <p className="indent-6">
          <strong>{t('sections.disclaimer.title')}</strong><br/>
          {t('sections.disclaimer.content')}
        </p>

        <p className="indent-6">
          <strong>{t('sections.liability.title')}</strong><br/>
          {t('sections.liability.content')}
        </p>

        <p className="indent-6">
          <strong>{t('sections.thirdParty.title')}</strong><br/>
          {t('sections.thirdParty.content')}
        </p>

        <p className="indent-6">
          <strong>{t('sections.termination.title')}</strong><br/>
          {t('sections.termination.content')}
        </p>

        <p className="indent-6">
          <strong>{t('sections.governing.title')}</strong><br/>
          {t('sections.governing.content')}
        </p>

        <p className="indent-6">
          <strong>{t('sections.contact.title')}</strong><br/>
          {t('sections.contact.content')}
        </p>

        <p className="indent-6">{t('outro')}</p>
      </div>
      <ElevatingBusiness />
    </div>
  );
};

export default Page;