'use client';

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="w-full fixed top-0 bg-white shadow-md py-6 px-12 flex justify-between items-center border-b border-b-gray-200 z-50">
      {/* Container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#AD6E9D]">
          EMMA
        </Link>

        {/* Navigation Links (Visible on Medium and Larger Screens) */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/" className="hover:text-[#AD6E9D]">
            {t('home')}
          </Link>
          <Link href="/services" className="hover:text-[#AD6E9D]">
            {t('services')}
          </Link>
          <Link href="/find-hospital" className="hover:text-[#AD6E9D]">
            {t('findHospital')}
          </Link>
          <Link href="/consultation" className="hover:text-[#AD6E9D]">
            {t('consultation')}
          </Link>
          <Link href="/contact" className="hover:text-[#AD6E9D]">
            {t('contact')}
          </Link>
        </div>

        {/* Language Picker and Buttons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 border rounded-lg p-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded ${
                language === 'en'
                  ? 'bg-[#AD6E9D] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('am')}
              className={`px-2 py-1 rounded ${
                language === 'am'
                  ? 'bg-[#AD6E9D] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              አማ
            </button>
          </div>
          <Link
            href="/auth/login"
            className="border border-[#AD6E9D] text-[#AD6E9D] px-4 py-2 rounded-lg hover:bg-[#AD6E9D] hover:text-white"
          >
            {t('login')}
          </Link>
          <Link
            href="/auth/sign-up"
            className="bg-[#AD6E9D] text-white px-4 py-2 rounded-lg hover:bg-[#AD6E9D]/80"
          >
            {t('signup')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
