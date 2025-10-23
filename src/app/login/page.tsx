"use client";

import { useFormik } from "formik";
import { loginValidationSchema } from "@/features/login/schemas/loginValidationSchema";
import { CiMail, CiLock } from "react-icons/ci";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {
  // const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);
  const router = useRouter();

  const signinFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setAuthError(null);
      setAuthSuccess(null);
      try {
        await axios.post("/api/auth/login", {
          email: values.email,
          password: values.password,
        });

        setAuthSuccess("Login berhasil!");
        router.push("/");
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          setAuthError(
            error.response?.data?.message || "Email atau password salah"
          );
        } else {
          setAuthError("Terjadi kesalahan yang tidak diketahui");
        }
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left image */}
        <div className=" lg:block bg-gray-100">
          <img
            src="/assets/images/Left.png"
            alt="visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right form */}
        <div className="p-8 md:p-12">
          <h1 className="text-3xl font-semibold mb-2">Sign In</h1>
          <p className="text-sm text-gray-500 mb-6">
            Don't have an account?{" "}
            <a href="/register" className="text-emerald-500">
              Sign Up
            </a>
          </p>

          {authSuccess && (
            <div className="text-green-700 bg-green-50 p-3 rounded mb-4">
              {authSuccess}
            </div>
          )}
          {authError && (
            <div className="text-red-700 bg-red-50 p-3 rounded mb-4">
              {authError}
            </div>
          )}

          <form onSubmit={signinFormik.handleSubmit} className="space-y-4">
            <div>
              <label className="sr-only">Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <CiMail />
                </span>
                <input
                  name="email"
                  type="email"
                  placeholder="Your username or email address"
                  onChange={signinFormik.handleChange}
                  onBlur={signinFormik.handleBlur}
                  value={signinFormik.values.email}
                  className="w-full pl-10 py-3 border-b border-gray-200 focus:outline-none"
                />
              </div>
              {signinFormik.touched.email && signinFormik.errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {signinFormik.errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="sr-only">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <CiLock />
                </span>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={signinFormik.handleChange}
                  onBlur={signinFormik.handleBlur}
                  value={signinFormik.values.password}
                  className="w-full pl-10 py-3 border-b border-gray-200 focus:outline-none"
                />
                <button
                  type="button"
                  aria-label="toggle password"
                  className="absolute right-3 top-3 text-gray-400"
                >
                  👁
                </button>
              </div>
              {signinFormik.touched.password &&
                signinFormik.errors.password && (
                  <p className="text-sm text-red-500 mt-1">
                    {signinFormik.errors.password}
                  </p>
                )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-emerald-500">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={signinFormik.isSubmitting}
              className="w-full bg-black text-white py-3 rounded-md mt-3"
            >
              {signinFormik.isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
