'use client'
import Image from 'next/image'
import { useTranslations } from "next-intl"
import { useState } from 'react';
import { strong } from '@/lib/utils/utils';
import dynamic from 'next/dynamic'
const TalkModal = dynamic(() => import("@/components/TalkModal"))

const ElevatingBusiness =  () => {
  const t = useTranslations("elevatingBusiness");
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col my-[30px] gap-[50px] border-[1px] border-solid border-[#6A65FF80] rounded-[35px] p-[60px] max-mui-md:p-[40px] max-smallest:p-[20px]">
      <div className="flex gap-[40px] max-mui-md:flex-col items-center">
        <Image
          src={t('logo.src')}
          width={130}
          height={150}
          alt={t('logo.alt')}
        />
        <div className="flex flex-col items-center justify-center max-mui-md:text-center gap-[20px]">
          <h2 className="font-medium text-[30px] max-mui-md:text-[24px] text-[#98989A]">
            {t('header.title')}
          </h2>
          <p className="font-normal text-[18px] max-mui-md:text-[16px] text-[#98989A]">
            {t.rich('header.description', strong)}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center max-small:flex-col max-small:max-small:gap-[20px] px-[24px] py-[40px] rounded-[12px] border-[1px] border-solid border-[#6A65FF80] backdrop-filter backdrop-blur-md bg-[#00000033] max-small:bg-[#24242433]">
        <div className="flex max-small:flex-col items-center gap-[20px]">
          <h2 className="font-normal text-[20px] max-mui-md:text-[18px] text-[#98989A]">
            {t('welcome.title')}
          </h2>
          <div className="pt-[14px] pr-[20px] pb-[14px] pl-[20px] rounded-[8px] bg-[#4267B2] max-small:bg-[#00000033]">
            <p className="font-normal text-[18px] max-mui-md:text-[16px] max-w-[600px] max-[1550px]:max-w-[500px] max-[1400px]:max-w-[300px] max-small:max-w-fit text-center small:truncate text-[#FFFFFF]">
              {t.rich('welcome.tagline', strong)}
            </p>
          </div>
        </div>
          <button onClick={() => setOpen(true)} className="btn pt-[18px] pr-[34px] pb-[18px] pl-[34px] rounded-[8px] bg-[#4A6ED1]">
            <p className="font-medium text-[18px] max-mui-md:text-[14px] text-[#FFFFFF]">
              {t('cta.buttonText')}
            </p>
          </button>
      </div>
      {open && <TalkModal setIsOpen={setOpen} isOpen={open} />}
    </div>
  )
}

export default ElevatingBusiness