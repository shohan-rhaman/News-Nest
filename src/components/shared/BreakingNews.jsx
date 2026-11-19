import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const BreakingNews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-6">
      <div className="flex items-center gap-4 bg-gray-200 py-4 px-3 overflow-hidden">
        <button className="btn bg-emerald-500 text-white shrink-0">
          Latest News
        </button>
        <div className="flex-1 min-w-0 overflow-hidden">
          <Marquee pauseOnHover={true}>
            {news.map((n) => (
              <span key={n._id}>{n.title}</span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
