import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";



const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
      <div className=" md:col-span-3 ">
        <LeftSideBar categories={categories} activeId={id} />
      </div>

      <div className=" md:col-span-6  text-gray-700">
        <h3 className="font-semibold text-gray-700 mb-5">News Nest Home</h3>
        {news.length > 0 ? (
          news.map((n) => (
            <div key={n._id}>
              <h3 className="border-2">{n.title}</h3>
            </div>
          ))
        ) : (
          <h3 className="flex flex-col items-center justify-center h-[20vh] text-emerald-500 text-xl font-medium">
            No news found!
          </h3>
        )}
      </div>

      <div className=" md:col-span-3">
        <h3 className="font-semibold text-gray-700">Login With</h3>
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
