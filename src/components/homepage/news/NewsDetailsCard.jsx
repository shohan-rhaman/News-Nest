import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetailsCard = ({ newsDetails }) => {
  const { title, image_url, details, category_id } = newsDetails;

  return (
    <div>
      {/* Section Heading */}
      <h2 className="text-lg font-semibold text-gray-800 mb-5">
        News Nest
      </h2>

      {/* Outer Bordered Card */}
      <div className="border border-gray-200 rounded-md p-6 bg-white">
        {/* Main Article Image */}
        <div className="mb-6">
          <Image
            src={image_url}
            alt={title || "News Image"}
            width={800}
            height={450}
            className="w-full h-auto max-h-[420px] object-cover rounded-md"
          />
        </div>

        {/* Article Title */}
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug mb-4">
          {title}
        </h1>

        {/* Full Article Details */}
        <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-8">
          {details}
        </p>

        {/* Back to Category Button */}
        <Link
          href={`/category/${category_id}`}
          className="inline-flex items-center gap-2 bg-[#D72050] hover:bg-[#b81942] text-white text-sm font-medium px-5 py-2.5 rounded-none transition-colors"
        >
          <FaArrowLeft size={14} />
          <span>All news in this category</span>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
