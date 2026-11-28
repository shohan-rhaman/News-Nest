"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
      const handleSubmitFrom = (data) => {
        console.log(data)
      };
    return (
        <div className="min-h-screen bg-[#f3f3f3] flex flex-col text-[#403f3f] ">
      {/* Main Content / Centered Login Card */}
      <main className="flex-1 flex items-center justify-center px-4 pb-16 mt-12">
        <div className="w-full max-w-135 bg-white px-8 py-12 sm:px-14 sm:py-14 rounded-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          {/* Card Heading */}
          <h1 className="text-2xl sm:text-[26px] font-semibold text-center text-[#403f3f]">
            Register your account
          </h1>

          {/* Divider Line */}
          <hr className="my-8 border-[#e7e7e7]" />

          {/* Login Form */}
          <form onSubmit={handleSubmit(handleSubmitFrom)} className="space-y-5">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-[#403f3f] mb-2.5"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your email address"
                className="w-full bg-[#f3f3f3] text-sm text-[#403f3f] placeholder-[#9f9f9f] px-4 py-3.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>

            {/* Photo URL */}
            <div>
              <label
                htmlFor="photo_url"
                className="block text-sm font-semibold text-[#403f3f] mb-2.5"
              >
                Photo URL
              </label>
              <input
                id="photo_url"
                type="url"
                {...register("photo_url")}
                placeholder="Enter your Photo Url"
                className="w-full bg-[#f3f3f3] text-sm text-[#403f3f] placeholder-[#9f9f9f] px-4 py-3.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
            </div>
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#403f3f] mb-2.5"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter your email address"
                className="w-full bg-[#f3f3f3] text-sm text-[#403f3f] placeholder-[#9f9f9f] px-4 py-3.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-[#403f3f] mb-2.5"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Enter your password"
                className="w-full bg-[#f3f3f3] text-sm text-[#403f3f] placeholder-[#9f9f9f] px-4 py-3.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white text-md font-medium py-3.5 rounded-sm transition-colors cursor-pointer"
              >
                Register
              </button>
            </div>
          </form>

          {/* Footer Link */}
          <p className="mt-6 text-center text-xs sm:text-sm font-medium text-[#706f6f]">
            Do you already have An Account ?{" "}
            <Link
              href="/login"
              className="text-emerald-500 hover:underline font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
    );
};

export default RegisterPage;