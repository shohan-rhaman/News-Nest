import Image from "next/image";
import React from "react";
import logo from "@/assets/news-nest.png"
import { format } from "date-fns";

export default function Header() {
  return <div className="text-center">
    <Image
      src={logo}
      alt="Logo"
      width={300}
      height={200}
      className="mx-auto -mb-12"
    />
    <p>Journalism Without Fear or Favour</p>
    <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
  </div>;
}
