import LeftSideBar from "@/components/homepage/news/LeftSideBar";

const getCategories = async () => {
  "use cache";

  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );

  const data = await res.json();
  return data.data.news_category;
};

export default async function Home() {
  const categories = await getCategories();
  //console.log(categories, "categories data")

  return (
    <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
      <div className=" md:col-span-3 ">
        <LeftSideBar categories={categories} activeId={"1"}/>
      </div>
      <div className="bg-blue-300 md:col-span-6 font-medium text-[18px] text-gray-700">
        News Nest Home
      </div>
      <div className="bg-emerald-300 md:col-span-3 font-medium text-[18px] text-gray-700">
        Social Icons
      </div>
    </div>
  );
}
