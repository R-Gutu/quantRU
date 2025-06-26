'use client';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from 'next/image';
import { Slider } from '@mui/material';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Dropzone from "../app/[locale]/(main)/_components/dropzone";
import { useTranslations } from 'next-intl';
import FormAlert from "./FormAlert";
import { AnimatePresence } from "motion/react";

export default function ProjectForm({ className, isPopup = false }: { className?: string, isPopup?: boolean }) {
    const t = useTranslations('contactForm');
    const [alertIsOpen, setAlertIsOpen] = useState(false);

    type ProjectFormData = {
        services?: (string | undefined)[];
        name: string;
        email: string;
        message: string;
        budget: (number | null | undefined)[];
    };


    const schema = yup.object().shape({
        name: yup.string().required(t('validation.name.required')).min(3, t('validation.name.minLength')),
        email: yup.string().email(t('validation.email.invalid')).required(t('validation.email.required')),
        services: yup.array().of(yup.string()).min(1, t('validation.services.minSelect')),
        message: yup.string().required(t('validation.message.required')).min(10, t('validation.message.minLength')),
        budget: yup.array().of(yup.number().nullable()).required().min(2, t('validation.budget.required')),

    });

    const [budget, setBudget] = useState<number[]>([1000, 5000]);
    const [attachments, setAttachments] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, control, formState: { errors }, setValue, watch } = useForm<ProjectFormData>({
        resolver: yupResolver(schema),
        defaultValues: { services: [], budget: [1000, 5000] }, // Ensure budget is initialized properly
    });

    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = async (data: ProjectFormData) => {
        try {
            setIsSubmitting(true);

            // Convert files to base64 format
            const uploadedFiles = await Promise.all(
                attachments.map(async (file) => {
                    return new Promise<string>((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => resolve(reader.result as string);
                        reader.onerror = (error) => reject(error);
                    });
                })
            );

            // Prepare the template parameters
            const templateParams = {
                ...data,
                budget: budget.join(' - '), // Convert budget array to string
                services: data.services?.join(', '), // Convert services array to string
                attachments: uploadedFiles, // Add base64-encoded files
            };

            // Send email with attachments
            const response = await emailjs.send(
                'service_panvzzr',
                'template_e7f0ogb',
                templateParams,
                'S46PU3W0ILp9NXki4'
            );

            if (response.status === 200) {
                setAlertIsOpen(true);
                if (formRef.current) {
                    formRef.current.reset();
                }
                setAttachments([]);
                setBudget([1000, 5000]);
                setValue("services", []);
            }

        } catch (error) {
            console.error('Failed to submit form:', error);
            alert(t('notifications.error'));
        } finally {
            setIsSubmitting(false);
        }
    };


    const styles = {
        border: '#6A65FF',
        text: '#FFFFFF',
        placeholder: '#656567',
    }

    const stylesPopup = {
        border: '#FFF',
        text: '#6D758F',
        placeholder: '#E0E0E0',
    }

    const handleDrop = (acceptedFiles: File[]) => {
        setAttachments(acceptedFiles);
    };

    const services = [
        { id: "web-dev", label: t('services.0.label') },
        { id: "crm-dev", label: t('services.1.label') },
        { id: "app-dev", label: t('services.2.label') },
        { id: "server", label: t('services.3.label') },
        { id: "ui-ux", label: t('services.4.label') },
        { id: "others", label: t('services.5.label') }
    ];

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={`flex flex-col gap-[40px] items-center w-full text-[${isPopup ? stylesPopup.text : styles.text}] ${className}`}>
                <div className='flex max-[1200px]:flex-col w-full gap-[40px]'>
                    <div className={`w-full flex flex-col gap-[20px] border-[1px] border-solid border-[${isPopup ? stylesPopup.border : styles.border}] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] ${isPopup ? '[box-shadow:0px_4px_4px_0px_#00000040]' : ''}`}>
                        <label htmlFor="name" className='text-[22px] max-[600px]:text-[16px]'>{t('fields.fullName')}</label>
                        <input id="name" {...register("name")} type="text" placeholder={t('placeholders.input')} className={`appearance-none bg-transparent placeholder:text-[${isPopup ? stylesPopup.placeholder : styles.placeholder}] placeholder:text-[18px] max-[600px]:placeholder:text-[16px] border-b-[1px] border-[#333333] p-[6px] pl-0 outline-none focus:placeholder:opacity-0`} />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>
                    <div className={`w-full flex flex-col gap-[20px] border-[1px] border-solid border-[${isPopup ? stylesPopup.border : styles.border}] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] ${isPopup ? '[box-shadow:0px_4px_4px_0px_#00000040]' : ''}`}>
                        <label htmlFor="email" className='text-[22px] max-[600px]:text-[16px]'>{t('fields.email')}</label>
                        <input id="email" {...register("email")} type="email" placeholder={t('placeholders.input')} className={`appearance-none bg-transparent placeholder:text-[${isPopup ? stylesPopup.placeholder : styles.placeholder}] placeholder:text-[18px] max-[600px]:placeholder:text-[16px] border-b-[1px] border-[#333333] p-[6px] pl-0 outline-none focus:placeholder:opacity-0`} />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                </div>
                <div className={`w-full flex flex-col gap-[40px] border-[1px] border-solid border-[${isPopup ? stylesPopup.border : styles.border}] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] ${isPopup ? '[box-shadow:0px_4px_4px_0px_#00000040]' : ''}`}>
                    <h2 className='text-[22px] max-[750px]:hidden'>{t('fields.servicesHeading')}</h2>
                    <h2 className='hidden text-[22px] max-[600px]:text-[16px] max-[750px]:block'>{t('fields.servicesMobile')}</h2>
                    <div className='grid grid-cols-2 max-[750px]:grid-cols-1 gap-[24px]'>
                        {services.map(({ id, label }) => (
                            <div key={id} className='flex gap-[10px] items-center'>
                                <div className='relative'>
                                    <input
                                        id={id}
                                        type="checkbox"
                                        value={label}
                                        {...register("services")}
                                        onChange={(e) => {
                                            const selectedServices = watch("services") || [];
                                            setValue("services", e.target.checked
                                                ? [...selectedServices, label]
                                                : selectedServices.filter((s) => s !== label)
                                            );
                                        }}
                                        className='peer appearance-none bg-[#0000004D] w-[28px] h-[28px] rounded-[4px] border-[1px] border-solid border-[#6A65FF] hover:bg-[#6a65ff58] checked:!bg-[#6A65FF] cursor-pointer transition-colors'
                                    />
                                    <Image className='peer-checked:opacity-100 pointer-events-none opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-62%] transition-opacity duration-300' src='/images/icons/check.svg' width={20} height={20} alt='check mark' />
                                </div>
                                <label htmlFor={id} className="text-[18px] max-[600px]:text-[16px]">{label}</label>
                            </div>
                        ))}
                    </div>
                    {errors.services && <span className="text-red-500 text-sm">{errors.services.message}</span>}
                </div>
                <div className={`w-full flex flex-col gap-[20px] border-[1px] border-solid border-[${isPopup ? stylesPopup.border : styles.border}] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] ${isPopup ? '[box-shadow:0px_4px_4px_0px_#00000040]' : ''}`}>
                    <label className='text-[22px] max-[600px]:text-[16px]'>{t('fields.budget')}</label>
                    <p className={`font-normal text-[18px] mb-[30px] text-[${isPopup ? stylesPopup.placeholder : styles.placeholder}]`}>{t('fields.budgetDescription')}</p>
                    <Controller
                        name="budget"
                        control={control}
                        render={({ field }) => (
                            <Slider
                                {...field}
                                aria-label="Budget slider"
                                value={budget}
                                onChange={(e, v) => {
                                    setBudget(v as number[]);
                                    // Update the form field value as well
                                    field.onChange(v);
                                }}
                                valueLabelDisplay="on"
                                max={15000}
                                step={100}
                                valueLabelFormat={(v) => `$${v}`}
                                sx={{ color: '#6A65FF' }}
                            />
                        )}
                    />
                </div>
                <div className={`w-full flex flex-col gap-[20px] border-[1px] border-solid border-[${isPopup ? stylesPopup.border : styles.border}] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] ${isPopup ? '[box-shadow:0px_4px_4px_0px_#00000040]' : ''}`}>
                    <label htmlFor="message" className='text-[22px] max-[600px]:text-[16px]'>{t('fields.message')}</label>
                    <input type="text" id="message" {...register("message")} placeholder={t('placeholders.input')} className={`appearance-none bg-transparent placeholder:text-[${isPopup ? stylesPopup.placeholder : styles.placeholder}] placeholder:text-[18px] max-[600px]:placeholder:text-[16px] border-b-[1px] border-[#333333] p-[6px] pl-0 outline-none focus:placeholder:opacity-0 resize-none`} />
                    {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                </div>
                {isPopup && (
                    <div className={`w-full flex flex-col gap-[20px] border-[1px] border-solid border-[${isPopup ? stylesPopup.border : styles.border}] rounded-[8px] py-[24px] px-[40px] max-[600px]:px-[24px] max-[600px]:py-[18px] ${isPopup ? '[box-shadow:0px_4px_4px_0px_#00000040]' : ''}`}>
                        <label className='text-[22px] max-[600px]:text-[16px]'>{t('fields.attachments')}</label>
                        <Dropzone onDrop={handleDrop} />
                        {attachments.length > 0 && (
                            <div className="mt-2">
                                <p className="text-sm font-medium">{t('fields.selectedFiles')}</p>
                                <ul className="list-disc pl-5">
                                    {attachments.map((file, index) => (
                                        <li key={index} className="text-sm">{file.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className='appearance-none outline-none border-none rounded-[8px] px-[44px] py-[18px] flex items-center justify-center text-[18px] bg-[linear-gradient(89.13deg,_#836FFF_0.18%,_#4A5DE5_99.86%)] cursor-pointer btn disabled:opacity-50 text-white'
                >
                    {isSubmitting ? t('buttons.submitting') : t('buttons.submit')}
                </button>
            </form>
            <AnimatePresence>
                {alertIsOpen && <FormAlert setIsOpen={setAlertIsOpen} />}
            </AnimatePresence>
        </>
    );
}