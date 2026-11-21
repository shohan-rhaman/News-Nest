import Link from "next/link";
import React from "react";

const LeftSideBar = ({categories, activeId}) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-700">All Category</h3>
      <ul className="space-y-4 mt-5">
        {categories.map((category) => (
          <li
            key={category.category_id}
            className={`
                ${activeId === category.category_id && "bg-emerald-100 py-2 px-3 rounded-sm"}
                text-gray-500 px-3 text-[15px]    
            `}
          >
            <Link href={`/category/${category.category_id}`} className="block">
                {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
