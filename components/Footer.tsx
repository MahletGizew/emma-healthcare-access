// components/Footer.js
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#EEEEEE] text-black py-16 px-36">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0 flex flex-col items-between">
          <Link href="/" className="text-2xl font-bold text-[#AD6E9D]">
            EMMA
          </Link>
          <select className="mt-6 bg-[#AD6E9D] p-2 text-white border border-white outline-none rounded">
            <option>English</option>
            <option>Amharic</option>
            <option>Arabic</option>
          </select>
        </div>

        <div className="mr-10">
          <h5 className="font-semibold mb-4 text-[#AD6E9D]">Quick Links</h5>
          <ul className="flex flex-col gap-2">
            <Link href="/about">About Us</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/health-services">Health Services</Link>
            <Link href="/find-hospital">Find Hospital</Link>
          </ul>
        </div>

        <div className="mr-10">
          <h5 className="font-semibold mb-2 text-[#AD6E9D]">
            Support & Resources
          </h5>
          <ul className="flex flex-col gap-2">
            <Link href="/faqs">FAQs</Link>
            <Link href="/emma-assistant">Emma Assistant</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/contact">Contact Us</Link>{" "}
          </ul>
        </div>

        <div className="mt-6 md:mt-0">
          <h5 className="font-semibold mb-2 text-[#AD6E9D]">
            Contact & Socials
          </h5>
          <ul className="flex flex-col gap-2">
            <p className="text-gray-400">📍 Address: EMMA Headquarters</p>
            <p className="text-gray-400 ">
              ✉️ Email:{" "}
              <Link
                href="mailto:support@emmahealth.com"
                className="text-gray-400 hover:text-gray-300"
              >
                support@emmahealth.com
              </Link>
            </p>
            <p className="text-gray-400">�� Phone: +12 456 7890</p>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
