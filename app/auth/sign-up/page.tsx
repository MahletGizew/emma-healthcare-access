"use client";

import { useState } from "react";
import Image from "next/image";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
} from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle Email & Password Signup
  const handleSignUp = async (e: any) => {
    console.log("hello heloo");
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up:", userCredential.user);
      // router.push("/"); // Redirect to dashboard after signup
    } catch (err) {
      setError((err as any).message);
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google user signed in:", result.user);
      // router.push("/dashboard");
    } catch (err) {
      setError((err as any).message);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Image and Quote */}
      <div className="w-1/2 relative hidden lg:block">
        <Image
          src="/images/signup-bg.jpg"
          alt="Doctor and Patient"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-16 left-14 text-white">
          <p className="text-lg italic">
            “Effort is like toothpaste; you can usually squeeze out just a
            little bit more.”
          </p>
          <p className="mt-2 font-bold">~ Dr. Andre Jackson</p>
          <p className="text-sm">Manager of Smile Pvt. Ltd.</p>
        </div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-900">
            Create An Account
          </h2>
          <p className="mt-2 text-gray-600">
            Discover a better way of spending with Ulfry.
          </p>

          {/* Google Sign-Up Button */}
          <button
            className="w-full flex items-center justify-center mt-4 border border-gray-300 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={handleGoogleSignIn}
          >
            <Image
              src="/icons/google.png"
              width={20}
              height={20}
              alt="Google"
              className="mr-2"
            />
            Sign up with Google
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-400">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSignUp}>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <div className="mb-4">
              <input
                type="text"
                placeholder="Type your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#53A4EC]"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#53A4EC]"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#53A4EC]"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600 text-sm">
                I agree with Terms and Privacy
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-[#53A4EC] text-white py-3 rounded-lg hover:bg-blue-500"
            >
              Sign up
            </button>
          </form>

          <p className="mt-4 text-gray-600 text-center">
            Have an account?{" "}
            <a href="/auth/login" className="text-[#53A4EC]">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
