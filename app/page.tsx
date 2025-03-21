"use client";
import StatSection from "@/components/StatSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { midwivesData } from '@/data/midwives';
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqData = [
    {
      question: "How does Emma protect my privacy?",
      answer: "Emma takes your privacy very seriously. All interactions on the platform are confidential and private. We protect your safety and ensure that your health-related information is protected at all times."
    },
    {
      question: "Can I talk to a doctor or health professional through Emma?",
      answer: "Yes, Emma connects you directly with qualified healthcare professionals. You can have secure, private consultations with doctors and specialists through our platform."
    },
    {
      question: "What kind of health information can I find on Emma?",
      answer: "Emma provides comprehensive information about reproductive health, family planning, mental health, and general wellness. All our content is expert-reviewed and regularly updated."
    },
    {
      question: "How can I find a hospital or health center near me?",
      answer: "Emma's hospital finder feature allows you to easily locate nearby healthcare facilities. Simply enter your location, and we'll show you the closest partner hospitals and health centers."
    },
    {
      question: "Can Emma help me with issues related to reproductive health?",
      answer: "Yes, Emma specializes in reproductive health support. Our platform connects you with experts who can provide guidance on family planning, maternal health, and other reproductive health concerns."
    }
  ];

  return (
    <>
      <section className="h-[80vh] mx-auto py-20 mb-8">
        <div className="flex flex-col md:flex-row justify-center items-end h-full">
          <div className="md:w-1/2 px-12">
            <h1 className="text-5xl font-bold leading-16 text-[#1e1e1e]">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              {t('heroSubtitle')}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/consultation"
                className="mt-6 bg-[#AD6E9D] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#AD6E9D]/80"
              >
                {t('startConsultation')}
              </Link>
              <Link
                href="/find-hospital"
                className="mt-6 border border-[#AD6E9D] text-[#AD6E9D] px-4 py-2 rounded cursor-pointer hover:bg-[#AD6E9D] hover:text-white"
              >
                {t('findHealthCenter')}
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/women_doctor.png"
              alt="Women Doctor"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      <StatSection />

      <section className="mx-auto py-12 px-4 mb-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 items-center text-center">
            <h3 className="text-4xl font-semibold">{t('whyUseEmma')}</h3>
            <p className="text-gray-600 text-lg max-w-2xl">
              {t('whyUseEmmaSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-10 bg-white shadow-md rounded-lg flex flex-col items-start gap-2">
            <Image src="/icons/locked.svg" alt="lock" width={36} height={36} />
            <h4 className="font-semibold text-xl text-gray-800 mt-4">
                {t('privateHelp')}
            </h4>
            <p className="text-gray-600 text-sm">
                {t('privateHelpDesc')}
            </p>
          </div>
          <div className="p-10 bg-white shadow-md rounded-lg flex flex-col items-start gap-2">
            <Image
              src="/icons/location.svg"
              alt="lock"
              width={36}
              height={36}
            />
            <h4 className="font-semibold text-xl text-gray-800 mt-4">
                {t('nearbyHospitals')}
            </h4>
            <p className="text-gray-600 text-sm">
                {t('nearbyHospitalsDesc')}
            </p>
          </div>
          <div className="p-10 bg-white shadow-md rounded-lg flex flex-col items-start gap-2">
            <Image src="/icons/info.svg" alt="lock" width={36} height={36} />
            <h4 className="font-semibold text-xl text-gray-800 mt-4">
                {t('healthInfo')}
            </h4>
            <p className="text-gray-600 text-sm">
                {t('healthInfoDesc')}
            </p>
          </div>
          <div className="p-10 bg-white shadow-md rounded-lg flex flex-col items-start gap-2">
            <Image src="/icons/ai.svg" alt="lock" width={36} height={36} />
            <h4 className="font-semibold text-xl text-gray-800 mt-4">
                {t('aiAssistance')}
            </h4>
            <p className="text-gray-600 text-sm">
                {t('aiAssistanceDesc')}
            </p>
          </div>
          <div className="p-10 bg-white shadow-md rounded-lg flex flex-col items-start gap-2">
            <Image src="/icons/contact.svg" alt="lock" width={36} height={36} />
            <h4 className="font-semibold text-xl text-gray-800 mt-4">
                {t('directContact')}
            </h4>
            <p className="text-gray-600 text-sm">
                {t('directContactDesc')}
            </p>
          </div>
          <div className="p-10 bg-white shadow-md rounded-lg flex flex-col items-start gap-2">
            <Image src="/icons/message.svg" alt="lock" width={36} height={36} />
            <h4 className="font-semibold text-xl text-gray-800 mt-4">
                {t('secureEasy')}
            </h4>
            <p className="text-gray-600 text-sm">
                {t('secureEasyDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('meetMidwives')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('midwivesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {midwivesData.slice(0, 3).map((midwife, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link
                  href={`/midwife/${midwife.id}`}
                  className="block"
                >
                  <div className="relative h-80">
                    <Image
                      src={midwife.imageUrl}
                      alt={midwife.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg text-gray-800">{midwife.name}</h3>
                    <p className="text-[#AD6E9D] text-sm mb-2">{midwife.title}</p>
                    <p className="text-gray-600 text-sm mb-2">{midwife.location}</p>
                    <p className="text-gray-500 text-sm mb-2">{midwife.experience}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {midwife.specialties?.slice(0, 3).map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-[#AD6E9D]/10 text-[#AD6E9D] text-xs px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>

                {/* Contact Icons */}
                <div className="flex justify-center gap-4 p-4 pt-0">
                  <button
                    className="text-[#AD6E9D] hover:text-[#AD6E9D]/80 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `tel:+44123456789`;
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                  <button
                    className="text-[#AD6E9D] hover:text-[#AD6E9D]/80 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `mailto:${midwife.name.toLowerCase().replace(' ', '.')}@emma-healthcare.com`;
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-[#AD6E9D] hover:text-[#AD6E9D]/80"
            >
              {t('viewAllMidwives')}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto py-12 px-4 mb-12 bg-[#AD6E9D] rounded-3xl overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="/images/trust-care.png"
                  alt="Trusted Care"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="md:w-1/2 text-white px-4 md:px-8">
              <h2 className="text-4xl font-bold mb-4">
                {t('trustedCare')}
              </h2>
              <p className="text-lg mb-6">
                {t('trustedCareDesc')}
              </p>
              <Link
                href="/find-hospital"
                className="inline-block bg-white text-[#AD6E9D] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                {t('findHospitalBtn')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto py-12 px-4 mb-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-4 items-center text-center mb-12">
            <h2 className="text-4xl font-semibold">{t('successStories')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              {t('successStoriesSubtitle')}
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-semibold mb-4">{t('storyTitle')}</h3>
                <p className="text-gray-600 mb-6">
                  {t('storyContent')}
                </p>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-gray-300" />
                  ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-3xl overflow-hidden">
                  <Image
                    src="/images/success-stories.png"
                    alt="Success Story"
                    width={683}
                    height={629}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#AD6E9D]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/robo.png"
              alt="Emma AI Assistant"
              width={400}
              height={500}
              className="object-contain"
            />
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4">
              {t('emmaAITitle')}
            </h2>
            <p className="text-lg mb-6">
              {t('emmaAIDesc')}
            </p>
            <Link
              href="/assistance"
              className="inline-block bg-white text-[#AD6E9D] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              {t('tryEmma')}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto py-12 px-4 mb-12">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 items-center text-center mb-12">
            <h2 className="text-4xl font-semibold">{t('faqTitle')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              {t('faqSubtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: t('faqPrivacy'),
                answer: t('faqPrivacyAnswer')
              },
              {
                question: t('faqDoctor'),
                answer: t('faqDoctorAnswer')
              },
              {
                question: t('faqHealthInfo'),
                answer: t('faqHealthInfoAnswer')
              },
              {
                question: t('faqHospital'),
                answer: t('faqHospitalAnswer')
              },
              {
                question: t('faqReproductive'),
                answer: t('faqReproductiveAnswer')
              }
            ].map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full flex items-center justify-between p-4 bg-white rounded-lg text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openQuestion === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openQuestion === index && (
                  <div className="p-4 bg-[#AD6E9D]/5 rounded-b-lg mt-1">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
