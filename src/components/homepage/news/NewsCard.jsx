import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  // Handle if `news` is passed as an array of articles or a single news object
  const newsList = Array.isArray(news) ? news : [news];

  return (
    <div className="space-y-8 mb-10">
      {newsList.map((item) => {
        const { _id, title, author, image_url, details, rating, total_view } =
          item;

        // Format date to YYYY-MM-DD (e.g., 2022-08-21)
        const formattedDate = author?.published_date
          ? author.published_date.split(" ")[0]
          : "";

        return (
          <div
            key={_id}
            className="card bg-base-100 border border-emerald-100 rounded-md overflow-hidden shadow-xs"
          >
            {/* 1. Top Author Bar (Full Width Gray Background) */}
            <div className="bg-emerald-100 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={author?.img}
                  alt={author?.name || "Author"}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm text-gray-800">
                    {author?.name || "Unknown Author"}
                  </h4>
                  <p className="text-xs text-gray-500">{formattedDate}</p>
                </div>
              </div>

              {/* Bookmark & Share Icons */}
              <div className="flex items-center gap-3 text-gray-600">
                <button
                  type="button"
                  aria-label="Bookmark"
                  className="hover:text-gray-900 cursor-pointer"
                >
                  <FaRegBookmark size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Share"
                  className="hover:text-gray-900 cursor-pointer"
                >
                  <FaShareAlt size={16} />
                </button>
              </div>
            </div>

            {/* 2. Main Card Body */}
            <div className="p-5">
              {/* News Headline */}
              <h2 className="text-lg md:text-xl font-bold text-gray-800 leading-snug mb-4">
                {title}
              </h2>

              {/* Thumbnail Image */}
              <figure className="mb-5">
                <Image
                  src={image_url}
                  alt={title || "News Thumbnail"}
                  width={700}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover rounded-md"
                />
              </figure>

              {/* Truncated Details + Orange "Read More" */}
              <div className="text-sm text-gray-500 leading-relaxed">
                {details?.length > 250 ? (
                  <>
                    <p className="inline">{details.slice(0, 250)}...</p>
                    <Link
                      href={`/news/${_id}`}
                      className="block mt-1 font-semibold text-orange-500 hover:underline"
                    >
                      Read More
                    </Link>
                  </>
                ) : (
                  <p>{details}</p>
                )}
              </div>

              {/* Divider Line */}
              <hr className="my-4 border-gray-200" />

              {/* 3. Bottom Footer: 5 Orange Stars + Rating & Total Views */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                {/* Stars & Number */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-orange-400">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} size={16} />
                    ))}
                  </div>
                  <span className="font-medium text-gray-700 ml-1">
                    {rating?.number || "4.9"}
                  </span>
                </div>

                {/* Eye Icon & Views */}
                <div className="flex items-center gap-2 text-gray-600">
                  <FaEye size={16} />
                  <span className="font-medium">{total_view || 0}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCard;
