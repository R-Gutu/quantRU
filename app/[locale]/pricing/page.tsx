'use client'
import { Check } from "lucide-react"
import ElevatingBusiness from "../_components/ElevatingBusiness"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { AnimatePresence } from "framer-motion"
import TalkModal from "@/components/TalkModal"
import { useState } from "react"


interface Plan {
  price: string
  oldPrice: string
  heading: string
  desc: string
  features: string[]
  cta: string
  featured?: boolean
  badge?: string
}


export default function PricingPage() {
  const t = useTranslations("pricing")
  const plans = t.raw("cards") as Plan[]             // type-safety: shape matches JSON above
  const [talkModalOpen, setTalkModalOpen] = useState(false)

  return (
    <div className="px-[100px] max-mui-md:px-[40px] max-medium:px-[20px] max-small:px-[16px] max-smallest:px-[12px] font-inter">
      <div className="min-h-screen flex items-center justify-center p-4 max-small:p-2 max-smallest:p-1">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-20 max-medium:mb-16 max-small:mb-12 max-smallest:mb-8 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4 max-smallest:mb-2">
            <Image
                src={t("price")}
                alt='Quant Apps Logo'
                width={100}
                height={60}
                className="animate-bounce-subtle max-small:w-[80px] max-small:h-[48px] max-smallest:w-[60px] max-smallest:h-[36px]"
            />
          </div>
          <h1 className="text-4xl md:text-5xl max-big:text-4xl max-medium:text-3xl max-small:text-2xl max-smallest:text-xl font-bold text-white mb-4 max-smallest:mb-2 animate-fade-in-up animation-delay-200">
            {t.rich("header.title", {
              highlight: (text) => (
                <span className="bg-gradient-to-r from-[#5D5FEF] to-[#37B5FF] bg-clip-text text-transparent animate-gradient-x">{text}</span>
              )
            })}
          </h1>
          <p className="text-[#E6E6E6] text-lg max-medium:text-base max-small:text-sm max-smallest:text-xs max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            {t("header.subtitle")}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid mui-md:grid-cols-3 max-medium:grid-cols-1 gap-6 max-small:gap-4 max-smallest:gap-3 max-w-6xl mx-auto bg-[#FFFFFF] px-12 max-big:px-8 max-medium:px-6 max-small:px-4 max-smallest:px-3 py-4 max-smallest:py-3 rounded-3xl max-small:rounded-2xl relative animate-fade-in-up animation-delay-600 hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 left-[50%] -translate-y-1/2 -translate-x-1/2 max-medium:left-1/2 max-medium:transform max-medium:-translate-x-1/2 animate-float">
                <Image src={t("bg")} alt="Design gratuit" width={100} height={60} className="w-[200px] h-[200px] max-big:w-[160px] max-big:h-[160px] max-medium:w-[120px] max-medium:h-[120px] max-small:w-[80px] max-small:h-[80px] max-smallest:w-[60px] max-smallest:h-[60px]" />
            </div>
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={
                  "bg-white rounded-3xl max-small:rounded-2xl p-8 max-big:p-6 max-medium:p-5 max-small:p-4 max-smallest:p-3 hover:shadow-xl hover:scale-105 max-small:hover:scale-102 transition-all duration-300 hover:-translate-y-2 max-small:hover:-translate-y-1 group animate-fade-in-left animation-delay-800 " +
                  (plan.featured
                    ? "bg-gradient-to-r from-[#836FFF] to-[#4A5DE5] -translate-y-12 max-medium:-translate-y-6 max-small:-translate-y-3 max-smallest:-translate-y-2 relative hover:shadow-2xl hover:scale-105 max-small:hover:scale-102 transition-all duration-300 hover:-translate-y-16 max-medium:hover:-translate-y-8 max-small:hover:-translate-y-4 max-smallest:hover:-translate-y-3 group animate-fade-in-right animation-delay-1200 hover:from-[#9580FF] hover:to-[#5B6EE8]"
                    : ""
                  )
                }
              >
                {plan.featured && (
                  <div className="absolute top-2 max-small:top-1 left-1/2 transform -translate-x-1/5 max-medium:-translate-x-1/2">
                    <div className="bg-white max-smallest:hidden text-black px-4 max-small:px-3 max-smallest:px-2 py-2 max-small:py-1 max-smallest:py-1 rounded-full text-sm max-small:text-xs max-smallest:text-xs font-bold animate-pulse-subtle group-hover:animate-bounce-subtle">
                      {plan.badge}
                    </div>
                  </div>
                )}
                {/* Pricing */}
                <div className="mb-6 max-small:mb-4 max-smallest:mb-3">
                  <div className="flex items-baseline gap-2 mb-2 max-smallest:mb-1">
                    <span className={`text-5xl max-big:text-4xl max-medium:text-3xl max-small:text-2xl max-smallest:text-xl font-bold ${plan.featured ? 'text-white group-hover:scale-110 transition-transform duration-300' : 'text-gray-900 group-hover:text-[#836FFF] transition-colors duration-300'}`}>
                      {plan.price}
                    </span>
                    <span className={plan.featured ? "text-purple-200 line-through text-lg max-medium:text-base max-small:text-sm max-smallest:text-xs" : "text-gray-500 line-through text-lg max-medium:text-base max-small:text-sm max-smallest:text-xs group-hover:text-gray-400 transition-colors duration-300"}>
                      {plan.oldPrice}
                    </span>
                  </div>
                  <h3 className={`text-2xl max-big:text-xl max-medium:text-lg max-small:text-base max-smallest:text-sm font-bold mb-2 max-smallest:mb-1 ${plan.featured ? 'text-white' : 'text-gray-900 group-hover:text-[#836FFF] transition-colors duration-300'}`}>{plan.heading}</h3>
                  <p className={plan.featured ? "text-purple-100 max-medium:text-sm max-small:text-xs max-smallest:text-xs" : "text-gray-600 max-medium:text-sm max-small:text-xs max-smallest:text-xs group-hover:text-gray-700 transition-colors duration-300"}>{plan.desc}</p>
                </div>
                {/* Features */}
                <div className={`space-y-4 max-small:space-y-3 max-smallest:space-y-2 mb-8 max-small:mb-6 max-smallest:mb-4`}>
                  {plan.features.map((feature: string, fi: number) => (
                    <div key={fi} className={
                      plan.featured
                        ? "flex items-center gap-3 max-small:gap-2 hover:translate-x-2 max-small:hover:translate-x-1 transition-transform duration-200"
                        : "flex items-center gap-3 max-small:gap-2 hover:translate-x-2 max-small:hover:translate-x-1 transition-transform duration-200"
                    }>
                      {plan.featured
                        ? <div className="w-6 h-6 max-small:w-5 max-small:h-5 max-smallest:w-4 max-smallest:h-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                            <Check className="w-4 h-4 max-small:w-3 max-small:h-3 max-smallest:w-2 max-smallest:h-2 text-white group-hover:scale-110 transition-transform duration-200" />
                          </div>
                        : <div className="w-6 h-6 max-small:w-5 max-small:h-5 max-smallest:w-4 max-smallest:h-4 flex items-center justify-center">
                            <Image src="/images/icons/checkmark.svg" alt="SEO Icon" width={16} height={16} className="w-full group-hover:scale-110 transition-transform duration-200" />
                          </div>
                      }
                      <span className={`${plan.featured ? "text-white" : "text-gray-700"} max-medium:text-sm max-small:text-xs max-smallest:text-xs`}>{feature}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setTalkModalOpen(true)} className={
                  plan.featured
                      ? "w-full bg-white text-black hover:bg-gray-50 font-semibold py-3 max-small:py-2 max-smallest:py-2 px-6 max-small:px-4 max-smallest:px-3 rounded-[32px] max-small:rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 max-small:hover:scale-102 active:scale-95 max-medium:text-sm max-small:text-xs max-smallest:text-xs"
                      : "w-full bg-gradient-to-r from-[#836FFF] to-[#4A5DE5] text-white font-semibold py-4 max-small:py-3 max-smallest:py-2 rounded-[32px] max-small:rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 max-small:hover:scale-102 hover:from-[#9580FF] hover:to-[#5B6EE8] active:scale-95 max-medium:text-sm max-small:text-xs max-smallest:text-xs"
                  }>
                  {plan.cta}
                </button>
              </div>
            ))}
        </div>
      </div>
      </div>
      <AnimatePresence>
        {talkModalOpen && <TalkModal isOpen= {talkModalOpen} setIsOpen={setTalkModalOpen}/>}
     </AnimatePresence>
      <ElevatingBusiness />
    </div>
  )
}