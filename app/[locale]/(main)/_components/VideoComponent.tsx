"use client"
import Image from "next/image";
import Blur from "@/components/Blur";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import dynamic from 'next/dynamic'
const VideoModal = dynamic(() => import("./VideoModal"))

export default function VideoComponent({ ipadAlt, watchAlt } : { ipadAlt: string, watchAlt: string }) {
    const [videoOpen, setVideoOpen] = useState(false);
    return (
        <>
            <div className="flex items-center justify-center relative mt-[25px] w-full">
                <Image src="/images/pictures/ipad.webp" priority width={578} height={443} alt={ipadAlt} className="h-auto w-[85%] min-[700px]:w-[530px] min-[1900px]:w-[578px]" />
                <Image onClick={() => setVideoOpen(true)} priority className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[30%] duration-200 transition-all cursor-pointer hover:scale-110 hover:drop-shadow-2xl" src="/images/elements/watch.svg" width={261} height={120} alt={watchAlt} />
                <Blur
                    color='#4A5DE5'
                    left="200px"
                    top="100px"
                    filter="blur(120px)"
                    className="w-[229px] h-[229px] -z-10"
                />
                <Blur
                    color='#4A5DE5'
                    right="250px"
                    top="100px"
                    filter="blur(120px)"
                    className="w-[229px] h-[229px] -z-10"
                />
            </div>
            <AnimatePresence>
                {videoOpen && <VideoModal setIsOpen={setVideoOpen}/>}
            </AnimatePresence>
        </>
    )
}