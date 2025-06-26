import { clsx, type ClassValue } from "clsx"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { Link } from "@/i18n/routing"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const strong = {
  strong: (chunck: ReactNode) => <strong>{chunck}</strong>,
  services: (chunck: ReactNode) => <Link href={'/services'} className="cursor-pointer text-bold">{chunck}</Link>,
  careers: (chunck: ReactNode) => <Link href={'/careers'} className="cursor-pointer text-bold">{chunck}</Link>,
  aboutUs: (chunck: ReactNode) => <Link href={'/about-us'} className="cursor-pointer text-bold">{chunck}</Link>,
  projects: (chunck: ReactNode) => <Link href={'/projects'} className="cursor-pointer text-bold">{chunck}</Link>,
  process: (chunck: ReactNode) => <Link href={'/process'} className="cursor-pointer text-bold">{chunck}</Link>,
}