// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-white shadow-md py-6 px-12 flex justify-between items-center border-b border-b-gray-200 z-50">
      {/* Container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#53A4EC]">
          EMMA
        </Link>

        {/* Navigation Links (Visible on Medium and Larger Screens) */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/" className="hover:text-[#53A4EC]">
            Home
          </Link>
          <Link href="/services" className="hover:text-[#53A4EC]">
            Services
          </Link>
          <Link href="/find-hospital" className="hover:text-[#53A4EC]">
            Find a Hospital
          </Link>
          <Link href="/consultation" className="hover:text-[#53A4EC]">
            Consultation
          </Link>
          <Link href="/contact" className="hover:text-[#53A4EC]">
            Contact
          </Link>
        </div>

        {/* Buttons */}
        <div className="space-x-4">
          <Link
            href="/auth/login"
            className="border border-[#53A4EC] text-[#53A4EC] px-4 py-2 rounded-lg hover:bg-[#53A4EC] hover:text-white transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/auth/sign-up"
            className="bg-[#53A4EC] text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}