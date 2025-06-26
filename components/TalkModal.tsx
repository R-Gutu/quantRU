"use client";

import { Modal } from "@mui/material";
import Image from "next/image";
import ProjectForm from "@/components/projectForm";
import * as m from 'motion/react-m';
const TalkModal = ({ setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
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
            onClose={() => setIsOpen(false)}
            disableScrollLock={true}
            className="flex justify-center items-center outline-none no-doc-scroll"
        >
            <m.div
                initial={{ opacity: 0, y: -400 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -400 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white w-[70%] max-[700px]:w-[95%] h-[90%] rounded-[35px] py-[25px] overflow-hidden shadow-lg">
                <div className="flex justify-between mb-[25px] px-[10%] max-[1100px]:px-[40px] max-[500px]:px-[20px]">
                    <Image
                        src="/images/icons/logo-mobile.svg"
                        width={237}
                        height={58}
                        alt="logo"
                        className="max-[500px]:w-[150px]"
                    />
                    <Image
                        src="/images/icons/cross.svg"
                        width={70}
                        height={106}
                        className="cursor-pointer"
                        alt="close"
                        onClick={() => setIsOpen(false)}
                    />
                </div>
                <ProjectForm className="overflow-auto custom-scrollbar max-h-[60vh] px-[10%] max-[1100px]:px-[40px] max-[500px]:px-[20px]" isPopup />
            </m.div>
        </Modal>
    );
};

export default TalkModal;
