"use client";

import { Modal } from "@mui/material";
import { getIntroByLanguage } from "@/lib/utils/languageUtils";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import * as m from 'motion/react-m';

const VideoModal = ({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const currentLocale = useLocale();  // ✅ Now inside a Client Component
    const intro = getIntroByLanguage(currentLocale);
    const t = useTranslations("video");

    function handleOnClose() {
        setIsOpen(false);
    }

    return (
        <Modal
            slotProps={{
                backdrop: {
                    sx: {
                        backdropFilter: "blur(10px)",
                    }
                }
            }}
            open={true}
            onClose={handleOnClose}
            className="px-[10%] max-[1000px]:px-[20px] max-[700px]:px-[0px] flex justify-center items-center no-doc-scroll"
        >
            <m.div
                initial={{ opacity: 0, y: -400 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -400 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white p-[40px] max-[700px]:p-[20px] max-[700px]:pt-[40px] rounded-[15px] relative">
                <Image
                    src="/images/icons/cross.svg"
                    alt="close cross"
                    width={70}
                    height={70}
                    className="absolute top-[-20px] max-[700px]:top-[-30px] right-0 cursor-pointer"
                    onClick={handleOnClose}
                />
                <video width="100%" controls key={intro} autoPlay preload="none">
                    <source src={intro} type="video/mp4" />
                    {t("notSupported")}
                </video>
            </m.div>
        </Modal>
    );
};

export default VideoModal;
