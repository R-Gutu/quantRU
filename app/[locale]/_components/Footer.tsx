import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import SocialLinksType from "@/lib/types/SocialLinksType";

const Footer = async () => {
  const tToolbar = await getTranslations("app-toolbar");
  const tFooter = await getTranslations("footer");

  const socialLinks: SocialLinksType[] = [
    // { href: "https://www.facebook.com/profile.php?id=61571073299478", icon: "/images/icons/facebook-logo.svg", alt: "Facebook logo" },
    { href: "https://www.instagram.com/quantapps_/", icon: "/images/icons/instagram-logo.svg", alt: "Instagram logo" },
    { href: "https://www.linkedin.com/company/quant-apps", icon: "/images/icons/linked-in-logo.svg", alt: "LinkedIn logo" },
    // { href: "https://www.tiktok.com/@quantapplications", icon: "/images/icons/tik-tok-logo.svg", alt: "TikTok logo" },
    { href: "https://t.me/quantapps", icon: "/images/icons/telegram-logo.svg", alt: "Telegram logo" },
    // { href: "https://wa.me/37369882331", icon: "/images/icons/whats-app-logo.svg", alt: "WhatsApp logo" }
  ];

  const pages = ['services', 'projects', 'process', 'about-us', 'careers', 'terms-of-use', 'privacy-policy']

  return (
    <div className="p-[60px] bg-[#0000001a]">
      <div className=" w-full font-inter flex flex-col flex-wrap gap-[50px]">
        <div className="w-full flex items-center max-medium:flex-col justify-between ">
          <Link href="/" legacyBehavior>
            <a className="self-center min-w-[200px] !font-inter">
              <Image src="/images/icons/Logo.svg" alt="Logo" width={200} height={60} />
            </a>
          </Link>
          <div className=" flex flex-wrap gap-x-[30px] max-medium:my-[30px] min-w-[330px] max-w-[500px] items-center justify-center mx-2">
            <hr className=" hidden w-full border-[#6A65FF1A] border-[1px] my-5 max-medium:block" />
            {pages.map(e => <Link key={e} href={`/${e}`} legacyBehavior>
              <a className="text-[#E6E6E6] text-[18px] max-smallest:text-[16px] font-medium text-nowrap transition-transform duration-200 hover:translate-y-[-3px]">{tToolbar(e)}</a>
            </Link>
            )}
          </div>

          <div className="flex items-center gap-[10px] border-[1px] border-[#6A65FF1A] rounded-[12px] p-[14px] max-mui-md:flex max-mui-md:flex-col max-mui-md:px-[60px] min-w-[300px]">
            <p className="text-[#E6E6E6] text-[14px] opacity-75 font-inter">{`${tFooter("StayConnected")}`}</p>
            <div className="flex gap-[20px] max-[600px]:grid max-[600px]:grid-cols-3">
              {socialLinks.map(({ href, icon, alt }) => (
                <div key={alt} className="btn flex shadow-[0px_4px_8px_0px_#4A5DE533]
            items-center no-underline border-1 bg-gradient-to-b from-[#6A65FF] to-[#24242400] border-[#6A65FF80] rounded-[8px] h-[64px] w-[64px] p-[20px] !font-inter max-mui-md:w-[58px] max-mui-md:h-[58px]">
                  <Link
                    href={href}
                    rel="noopener noreferrer"
                    legacyBehavior
                  >
                    <a target="_blank">
                      <Image
                        width={24}
                        height={24}
                        src={icon}
                        alt="External Link"
                        className="max-mui-md:w-[20px]"
                      />
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="border-[#6A65FF1A] border-[1px] max-smallest:hidden" />

        <div className="w-full max-mui-md:flex-col flex flex-row max-smallest:flex-col justify-between">
          <div className="flex flex-wrap text-[#E6E6E6] gap-[30px] text-[16px] max-smallest:text-[12px] items-center justify-center">
            <div className="max-smallest:w-full">
              <div className="flex items-center justify-center gap-[10px]">
                <Image width={24} height={24} src='/images/icons/email.svg' alt="email"/>
                support@quant-apps.com
              </div>
              <hr className="w-full border-[#6A65FF1A] border-[1px]" />
            </div>
            <div className="max-smallest:w-full">
              <div className="flex items-center justify-center gap-[10px]">
                <Image width={24} height={24} src='/images/icons/phone.svg' alt="email"/>
                +7 (999) 818-9636
              </div>
              <hr className="border-[#6A65FF1A] border-[1px]" />
            </div>
            <div className="max-smallest:w-full">
              <div className="flex items-center justify-center gap-[10px]">
                <Image width={24} height={24} src='/images/icons/geolocation.svg' alt="email"/>
                Российская Федерация, Москва
              </div>
              <hr className="border-[#6A65FF1A] border-[1px]" />
            </div>
          </div>
          <div className="w-fit flex items-center justify-center text-[12px] font-normal leading-[14.52px] text-[#e1e1e6] opacity-75 max-mui-md:w-full max-mui-md:mt-10">
            {`© ${new Date().getFullYear()} Quant-Applications. ${tFooter("AllRightsReserved")}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;