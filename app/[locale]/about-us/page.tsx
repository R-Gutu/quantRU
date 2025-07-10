import Banner from "@/components/banner";
import Image from "next/image";
import TeamMember from "./_components/TeamMember";
import ElevatingBusiness from "../_components/ElevatingBusiness";
import TeamMemberType from "@/lib/types/MemberType";
import TimelineBlock from "./_components/TimelineBlock";
import TimelineType from "@/lib/types/TimelineType";
import Blur from "@/components/Blur";
import { getTranslations } from "next-intl/server";
import type { Metadata } from 'next'
import { strong } from "@/lib/utils/utils";
import * as m from 'motion/react-m'
import { leftAnimation } from "@/lib/animations/leftAnimation";
import { rightAnimation } from "@/lib/animations/rightAnimation";



export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");

  return {
    title: t("title"),
    description: t("description"),
  };
}

const Page = async () => {
  const t = await getTranslations("about");

  const teamMembers: TeamMemberType[] = [
    {
      name: t('team.members.1.name'),
      position: t('team.members.1.position'),
      link: "https://www.linkedin.com/in/veaceslav-soltan-290072261/",
      src: t('team.members.1.src'),
      alt: t('team.members.1.alt'),
      text: t.rich('team.members.1.text', strong)
    },
    {
      name: t('team.members.0.name'),
      position: t('team.members.0.position'),
      link: "https://www.linkedin.com/in/roman-gutu-920693229/",
      src: t('team.members.0.src'),
      alt: t('team.members.0.alt'),
      text: t.rich('team.members.0.text', strong)
    },
    {
      name: t('team.members.2.name'),
      position: t('team.members.2.position'),
      link: t('team.members.2.link'),
      src: t('team.members.2.src'),
      alt: t('team.members.2.alt'),
      text: t.rich('team.members.2.text', strong)
    },
    {
      name: t('team.members.3.name'),
      position: t('team.members.3.position'),
      link: t('team.members.3.link'),
      src: t('team.members.3.src'),
      alt: t('team.members.3.alt'),
      text: t.rich('team.members.3.text', strong)
    },
    {
      name: t('team.members.4.name'),
      position: t('team.members.4.position'),
      link: t('team.members.4.link'),
      src: t('team.members.4.src'),
      alt: t('team.members.4.alt'),
      text: t.rich('team.members.4.text', strong)
    },
    {
      name: t('team.members.5.name'),
      position: t('team.members.5.position'),
      link: t('team.members.5.link'),
      src: t('team.members.5.src'),
      alt: t('team.members.5.alt'),
      text: t.rich('team.members.5.text', strong)
    }
  ];

  const timeline: TimelineType[] = [
    {
      id: t('timeline.items.0.id'),
      title: t('timeline.items.0.title'),
      text: t.rich('timeline.items.0.text', strong)
    },
    {
      id: t('timeline.items.1.id'),
      title: t('timeline.items.1.title'),
      text: t.rich('timeline.items.1.text', strong)
    },
    {
      id: t('timeline.items.2.id'),
      title: t('timeline.items.2.title'),
      text: t.rich('timeline.items.2.text', strong)
    },
    {
      id: t('timeline.items.3.id'),
      title: t('timeline.items.3.title'),
      text: t.rich('timeline.items.3.text', strong)
    },
    {
      id: t('timeline.items.4.id'),
      title: t('timeline.items.4.title'),
      text: t.rich('timeline.items.4.text', strong)
    },
    {
      id: t('timeline.items.5.id'),
      title: t('timeline.items.5.title'),
      text: t.rich('timeline.items.5.text', strong)
    }
  ];

  return (
    <div className="flex flex-col font-inter px-[100px] max-mui-md:px-[40px] max-smallest:px-[10px]">
      <Banner
        className="mt-[20px] min-[600px]:mt-[60px]"
        priority
        src={t('banner.src')}
        header={t('banner.header')}
        subHeader={t('banner.subHeader')}
      />
      <div className="w-full flex gap-[150px] max-medium:gap-[40px] px-[100px] max-mui-md:px-[40px] max-smallest:px-[0px] py-[60px] max-medium:flex-col">
        <m.div 
        variants={leftAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-[20px] justify-center">
          <h1 className="font-semibold text-[44px] max-mui-md:text-[34px] max-smallest:text-[24px] max-smallest:text-center text-[#FFFFFF]">
            {t('about.title')}
          </h1>
          <div className="font-normal text-[20px] max-mui-md:text-[18px] max-smallest:text-[14px] text-[#E6E6E6] opacity-75">
            <p className="indent-6">{t.rich('about.paragraph1', strong)}</p>
            <p className="indent-6">{t.rich('about.paragraph2', strong)}</p>
            <p className="indent-6">{t.rich('about.paragraph3', strong)}</p>
            <p className="indent-6">{t.rich('about.paragraph4', strong)}</p>
            <p className="indent-6">{t.rich('about.paragraph5', strong)}</p>
          </div>
        </m.div>
        <m.div 
        variants={rightAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center justify-center">
          <Image
            width={1490}
            height={1490}
            className="w-full mui-md:min-w-[500px] max-h-[600px] max-w-[600px] h-auto rounded-[16px] border-[3px] border-solid border-[#6A65FF80]"
            alt={t('about.image.alt')}
            src={t('about.image.src')}
          />
        </m.div>
      </div>
      <div className="flex flex-col gap-[50px]">
        <h2 className="font-semibold text-[64px] max-mui-md:text-[50px] max-smallest:text-[40px] text-[#FFFFFF]">
          {t('timeline.title')}
        </h2>
        <div className="w-full max-mui-md:hidden">
          <Image
            src={t('timeline.image.src')}
            alt={t('timeline.image.alt')}
            width={1500}
            height={1500}
            className="w-full object-fill aspect-auto"
          />
        </div>
        <div className="mui-md:hidden">
          {timeline.map((item, index) => (
            <TimelineBlock key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[50px] px-[40px] py-[50px] max-smallest:px-[0px] max-smallest:py-[30px]">
        <h2 className="text-center font-semibold text-[64px] max-mui-md:text-[50px] max-smallest:text-[36px] text-[#FFFFFF]">
          {t('team.title')}
        </h2>
        <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-[50px] 
    max-medium:grid-cols-2 max-medium:grid-rows-3 
    max-small:grid-cols-1">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex justify-center items-center">
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
      <ElevatingBusiness />
      <div className="overflow-hidden absolute top-0 left-0 w-full h-full -z-10">
        <Blur
          color="#836FFF99"
          right="-250px"
          top="350px"
          filter="blur(250px)"
          className="w-[500px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
        />
        <Blur
          color="#836FFF99"
          left="-250px"
          top="1000px"
          filter="blur(250px)"
          className="w-[400px] h-[400px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
        />
        <Blur
          color="#836FFF99"
          right="-250px"
          top="1500px"
          filter="blur(250px)"
          className="w-[400px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
        />
        <Blur
          color="#836FFF99"
          left="-250px"
          top="2000px"
          filter="blur(250px)"
          className="w-[600px] h-[600px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
        />
        <Blur
          color="#9C08FFCC"
          right="-250px"
          top="2500px"
          filter="blur(200px)"
          className="w-[400px] h-[400px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
        />
        <Blur
          color="#9C08FFCC"
          left="-250px"
          top="3100px"
          filter="blur(200px)"
          className="w-[400px] h-[400px] max-[600px]:hidden max-[900px]:w-[300px] max-[900px]:h-[300px]"
        />
      </div>
    </div>
  );
};

export default Page;