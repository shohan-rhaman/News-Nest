import { Suspense } from "react";
import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";

// Tell Next.js which category IDs to prerender
export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    id: String(category.category_id),
  }));
}

// 1. Inner component that reads `params` and fetches category news
async function CategoryNewsSection({ params }) {
  const { id } = await params;

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
      <div className="md:col-span-3">
        <LeftSideBar categories={categories} activeId={id} />
      </div>

      <div className="md:col-span-6 text-gray-700">
        <h3 className="font-semibold text-gray-700 mb-5">News Nest Home</h3>
        {news.length > 0 ? (
        news.map((n) => (
            <NewsCard key={n._id} news={n}/>
        ))
      ) : (
        <h3 className="flex flex-col items-center justify-center h-[20vh] text-emerald-500 text-xl font-medium">
          No news found!
        </h3>
      )}
      </div>

      <div className="md:col-span-3">
        <h3 className="font-semibold text-gray-700 mb-5">Login With</h3>
        <RightSideBar />
      </div>
    </div>
  );
}

// 2. Main page component wraps the dynamic section in <Suspense>
const NewsCategoryPage = ({ params }) => {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto w-full px-4 mt-8 text-gray-500">
          <span className="loading loading-spinner text-success"></span>
        </div>
      }
    >
      <CategoryNewsSection params={params} />
    </Suspense>
  );
};

export default NewsCategoryPage;
