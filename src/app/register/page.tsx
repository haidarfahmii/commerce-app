"use client";

import { useFormik } from "formik";
import { signupValidationSchema } from "@/features/register/schemas/registerValidationSchema";
import { loginValidationSchema } from "@/features/login/schemas/loginValidationSchema";
import { CiUser, CiMail, CiLock } from "react-icons/ci";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);

  const router = useRouter();

  // formik untuk registrasi
  const signupFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setAuthError(null);
      setAuthSuccess(null);
      try {
        await axios.post("/api/auth/register", {
          name: values.name,
          email: values.email,
          password: values.password,
        });

        setAuthSuccess("Registrasi berhasil! Silakan masuk ke akun Anda.");
        setIsSignIn(true);
        resetForm();
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          setAuthError(
            error.response?.data.message || "Terjadi kesalahan saat registrasi"
          );
        } else {
          setAuthError("Terjadi kesalahan saat registrasi");
        }
        console.log(error);
      }
      setSubmitting(false);
    },
  });

  // formik untuk sign in
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
        router.push("/dashboard");
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          setAuthError(
            error.response?.data.message || "Email atau password salah"
          );
        } else {
          setAuthError("Terjadi kesalahan yang tidak diketahui");
        }
        console.log(error);
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="flex flex-col md:flex-row max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden bg-gray-800 border border-gray-700">
        {/* Kolom Kiri */}
        <div className="md:block md:w-1/2 relative">
          <img
            src="/assets/images/Left.png"
            alt="Auth visual"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>

        {/* Kolom Kanan */}
        <div className="w-full md:w-1/2 p-8 sm:p-12">
          {authSuccess && (
            <div className="bg-green-600 border border-green-500 text-white p-3 rounded-lg mb-4 text-center">
              {authSuccess}
            </div>
          )}
          {authError && (
            <div className="bg-red-600 border border-red-500 text-white p-3 rounded-lg mb-4 text-center">
              {authError}
            </div>
          )}

          {!isSignIn ? (
            <div>
              <h2 className="text-3xl font-bold mb-2">Create an Account</h2>
              <p className="text-gray-400 mb-6">
                Use your email and password to sign up
              </p>

              <form onSubmit={signupFormik.handleSubmit} className="space-y-4">
                <fieldset className="fieldset">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <CiUser />
                    </span>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={signupFormik.handleChange}
                      onBlur={signupFormik.handleBlur}
                      value={signupFormik.values.name}
                      className={`w-full bg-gray-700 border-0 border-b-2 ${
                        signupFormik.touched.name && signupFormik.errors.name
                          ? "border-red-500"
                          : "border-gray-600"
                      } rounded-lg text-white py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300`}
                    />
                  </div>
                  {signupFormik.touched.name && signupFormik.errors.name && (
                    <label className="text-red-400 text-sm mt-1">
                      {signupFormik.errors.name}
                    </label>
                  )}
                </fieldset>

                <fieldset className="fieldset">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <CiMail />
                    </span>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={signupFormik.handleChange}
                      onBlur={signupFormik.handleBlur}
                      value={signupFormik.values.email}
                      className={`w-full bg-gray-700 border-0 border-b-2 ${
                        signupFormik.touched.email && signupFormik.errors.email
                          ? "border-red-500"
                          : "border-gray-600"
                      } rounded-lg text-white py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300`}
                    />
                  </div>
                  {signupFormik.touched.email && signupFormik.errors.email && (
                    <label className="text-red-400 text-sm mt-1">
                      {signupFormik.errors.email}
                    </label>
                  )}
                </fieldset>

                <fieldset className="fieldset">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <CiLock />
                    </span>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={signupFormik.handleChange}
                      onBlur={signupFormik.handleBlur}
                      value={signupFormik.values.password}
                      className={`w-full bg-gray-700 border-0 border-b-2 ${
                        signupFormik.touched.password &&
                        signupFormik.errors.password
                          ? "border-red-500"
                          : "border-gray-600"
                      } rounded-lg text-white py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300`}
                    />
                  </div>
                  {signupFormik.touched.password &&
                    signupFormik.errors.password && (
                      <label className="text-red-400 text-sm mt-1">
                        {signupFormik.errors.password}
                      </label>
                    )}
                </fieldset>
                <button
                  type="submit"
                  disabled={signupFormik.isSubmitting}
                  className="w-full bg-amber-400 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:opacity-50"
                >
                  {signupFormik.isSubmitting ? "Signing Up..." : "Sign Up"}
                </button>
              </form>

              <p className="text-center text-gray-400 mt-6">
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setIsSignIn(true);
                    setAuthError(null);
                    setAuthSuccess(null);
                  }}
                  className="text-amber-400 hover:underline font-semibold focus:outline-none"
                >
                  Sign In
                </button>
              </p>
            </div>
          ) : (
            /* FORM SIGN IN (LOGIN) */
            <div>
              <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
              <p className="text-gray-400 mb-6">Sign in to your account</p>

              <form onSubmit={signinFormik.handleSubmit} className="space-y-4">
                <fieldset className="fieldset">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <CiMail />
                    </span>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={signinFormik.handleChange}
                      onBlur={signinFormik.handleBlur}
                      value={signinFormik.values.email}
                      className={`w-full bg-gray-700 border-0 border-b-2 ${
                        signinFormik.touched.email && signinFormik.errors.email
                          ? "border-red-500"
                          : "border-gray-600"
                      } rounded-lg text-white py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300`}
                    />
                  </div>
                  {signinFormik.touched.email && signinFormik.errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {signinFormik.errors.email}
                    </p>
                  )}
                </fieldset>

                <fieldset className="fieldset">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <CiLock />
                    </span>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={signinFormik.handleChange}
                      onBlur={signinFormik.handleBlur}
                      value={signinFormik.values.password}
                      className={`w-full bg-gray-700 border-0 border-b-2 ${
                        signinFormik.touched.password &&
                        signinFormik.errors.password
                          ? "border-red-500"
                          : "border-gray-600"
                      } rounded-lg text-white py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300`}
                    />
                  </div>
                  {signinFormik.touched.password &&
                    signinFormik.errors.password && (
                      <p className="text-red-400 text-sm mt-1">
                        {signinFormik.errors.password}
                      </p>
                    )}
                </fieldset>

                <button
                  type="submit"
                  disabled={signinFormik.isSubmitting}
                  className="w-full bg-amber-400 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:opacity-50"
                >
                  {signinFormik.isSubmitting ? "Signing In..." : "Sign In"}
                </button>
              </form>

              <p className="text-center text-gray-400 mt-6">
                Don't have an account?{" "}
                <button
                  onClick={() => {
                    setIsSignIn(false);
                    setAuthError(null);
                    setAuthSuccess(null);
                  }}
                  className="text-amber-400 hover:underline font-semibold focus:outline-none"
                >
                  Sign Up
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
