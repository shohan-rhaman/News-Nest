"use client";

import Image from "next/image";
import React, { startTransition, useEffect, useState } from "react";
import logo from "@/assets/news-nest.png";
import { format } from "date-fns";

export default function Header() {
  const [date, setDate] = useState("");

  useEffect(() => {
    startTransition(() => {
      setDate(format(new Date(), "EEEE, MMM dd, yyyy"));
    });
  }, []);

  return (
    <div className="text-center">
      <Image
        src={logo}
        alt="Logo"
        width={300}
        height={200}
        className="mx-auto -mb-12"
      />
      <p>Journalism Without Fear or Favour</p>
      <p className="min-h-6">{date}</p>
    </div>
  );
}
