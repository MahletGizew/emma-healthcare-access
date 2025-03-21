"use client";
import { useState } from "react";
import { auth, googleProvider } from "../../../lib/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("logged in user", auth.currentUser);
      // window.location.href = "/";
      router.push("/");
    } catch (error) {
      console.error("Error during Google login:", (error as any).message);
      setError((error as any).message);
    }
  };

  // Handle email/password login
  const handleEmailLogin = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("logged in user", auth.currentUser);
      router.push("/");
    } catch (error) {
      console.error("Error during email login:", (error as any).message);
      setError((error as any).message);
    }
  };

  return (
    <div className="flex min-h-[90vh] bg-gray-100">
      {/* Left Side - Image and Quote */}
      <div className="hidden lg:flex w-1/2 relative">
        <Image
          src="/images/image 2.png"
          alt="Doctor"
          layout="fill"
          objectFit="cover"
          className="brightness-90"
        />
        <div className="absolute bottom-16 left-14 text-white">
          <p className="text-xl italic">
            “For There Was Never Yet Philosopher, That Could Endure The
            Toothache Patiently”
          </p>
          <p className="mt-2 text-base">— Dr Dre Andre Romelle</p>
          <p className="text-sm">Founder of Smile Pvt. Ltd</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-10 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 mt-2">
            Discover a better way of accessing healthcare with Emma.
          </p>

          <button
            onClick={handleGoogleLogin}
            className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-lg text-gray-700 bg-white shadow-sm hover:shadow-md"
          >
            <Image
              src="/icons/google.png"
              alt="Google"
              width={20}
              height={20}
            />
            Log in with Google
          </button>

          <div className="relative my-6 text-center">
            <span className="bg-white px-2 text-gray-400">Or</span>
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-px bg-gray-300"></div>
          </div>

          {error && (
            <div className="text-red-500 text-center mb-4">
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleEmailLogin}>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD6E9D]"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD6E9D]"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" /> Remember Me
              </label>
              <a href="#" className="text-sm text-[#AD6E9D] hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#AD6E9D] text-white py-2 rounded-lg hover:bg-[#AD6E9D]/80"
            >
              Log in
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Not a member yet?{" "}
            <Link
              href="/auth/sign-up"
              className="text-[#AD6E9D] hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
