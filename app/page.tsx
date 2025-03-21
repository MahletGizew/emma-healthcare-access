import StatSection from "@/components/StatSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-[80vh] mx-auto py-20 mb-8">
        <div className="flex flex-col md:flex-row justify-center items-end h-full">
          <div className="md:w-1/2 px-12">
            <h1 className="text-5xl font-bold leading-16 text-[#1e1e1e]">
              Confidential Health Support for Every Girl
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              Get private consultations, access trusted health information, and
              find the nearest care center—all in one place
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/consultation"
                className="mt-6 bg-[#53A4EC] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#3A83C4]"
              >
                Start Consultations
              </Link>
              <Link
                href="/find-hospital"
                className="mt-6 border border-[#53A4EC] text-[#53A4EC] px-4 py-2 rounded cursor-pointer hover:bg-[#53A4EC] hover:text-white"
              >
                Find a Health Center
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/hero-section.svg"
              alt="hero"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      <StatSection />

      <section className=" mx-auto py-12 px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-4 p-12 items-start col-span-2">
            <h3 className="text-4xl font-semibold">Why Use Emma</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-2">
              Emma connects you to trusted healthcare, expert advice, and
              confidential support—quickly, easily, and without judgment.
            </p>
          </div>
          <div className="p-10 bg-white shadow-md rounded-lg flex flex-col items-start gap-2">
            <Image src="/icons/locked.svg" alt="lock" width={36} height={36} />
            <h4 className="font-semibold text-xl text-gray-800 mt-4">
              Private Help
            </h4>
            <p className="text-gray-600 text-sm">
              Your health is personal. Get confidential support without fear or
              judgment.
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
              Nearby Hospitals
            </h4>
            <p className="text-gray-600 text-sm">
              Find nearby hospitals and health centers in just a few clicks.
            </p>
          </div>
          <div className="p-10 bg-white shadow-md rounded-lg flex flex-col items-start gap-2">
            <Image src="/icons/info.svg" alt="lock" width={36} height={36} />
            <h4 className="font-semibold text-xl text-gray-800 mt-4">
              Health Info
            </h4>
            <p className="text-gray-600 text-sm">
              Get expert-approved content on reproductive health, mental
              well-being, and more.
            </p>
          </div>
          <div className="p-10 bg-white shadow-md rounded-lg flex flex-col items-start gap-2">
            <Image src="/icons/ai.svg" alt="lock" width={36} height={36} />
            <h4 className="font-semibold text-xl text-gray-800 mt-4">
              AI Assistance
            </h4>
            <p className="text-gray-600 text-sm">
              Instant answers, 24/7, to help you make informed health decisions.
            </p>
          </div>
          <div className="p-10 bg-white shadow-md rounded-lg flex flex-col items-start gap-2">
            <Image src="/icons/contact.svg" alt="lock" width={36} height={36} />
            <h4 className="font-semibold text-xl text-gray-800 mt-4">
              Direct Contact
            </h4>
            <p className="text-gray-600 text-sm">
              Quickly connect with partner hospitals for guidance, appointments,
              or urgent care.
            </p>
          </div>
          <div className="p-10 bg-white shadow-md rounded-lg flex flex-col items-start gap-2">
            <Image src="/icons/message.svg" alt="lock" width={36} height={36} />
            <h4 className="font-semibold text-xl text-gray-800 mt-4">
              Secure & Easy
            </h4>
            <p className="text-gray-600 text-sm">
              A user-friendly platform designed for your safety and peace of
              mind.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
