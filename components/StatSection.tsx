'use client';

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const StatSection = () => {
  const { t } = useLanguage();

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12 py-12 px-12">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold p-2 text-[#AD6E9D]">10K+</h2>
        <p className="text-gray-600 p-2">{t('girlsSupported')}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold p-2 text-[#AD6E9D]">20+</h2>
        <p className="text-gray-600 p-2">{t('partnerHospitals')}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold p-2 text-[#AD6E9D]">95%</h2>
        <p className="text-gray-600 p-2">{t('usersConfident')}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold p-2 text-[#AD6E9D]">50K+</h2>
        <p className="text-gray-600 p-2">{t('consultationsDone')}</p>
      </div>
    </section>
  );
};

export default StatSection;
