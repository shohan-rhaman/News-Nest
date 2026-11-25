import React from "react";
import user from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-4 py-3 flex items-center">
      {/* Left Spacer (Takes 1/3 space) */}
      <div className="flex-1"></div>

      {/* Center Links */}
      <ul className="flex items-center justify-center gap-6 text-gray-700">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>

      {/* Right Avatar & Login (Takes 1/3 space, pushes content to far right) */}
      <div className="flex-1 flex items-center justify-end gap-3">
        <Image
          src={user}
          alt="avatar logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <Link href={"/login"}>
          <button className="btn bg-emerald-500 hover:bg-emerald-400 text-white px-5">Login</button>
        </Link>
      </div>
    </nav>
  );
}
