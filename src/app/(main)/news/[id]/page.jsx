import NewsDetailsCard from '@/components/homepage/news/NewsDetailsCard';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getNewsDetails } from '@/lib/data';
import React from 'react';

export const generateMetadata = async ({params})=>{
  const {id} = await params;
  const news = await getNewsDetails(id);
  //console.log(news, "news")

  return {
    title: news.title,
    description: news.details,
  }
};

const NewsDetailPage = async({params}) => {
    const {id} = await params;
    const newsDetails = await getNewsDetails(id)
    //console.log(newsDetails, "newsDetails")
    return (
         <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 mb-20">
      <div className="md:col-span-9">
        {/* <LeftSideBar categories={categories} activeId={id} /> */}
        <NewsDetailsCard newsDetails={newsDetails}/>
      </div>

      <div className="md:col-span-3">
        <h3 className="font-semibold text-gray-700 mb-5">Login With</h3>
        <RightSideBar />
      </div>
    </div>
    );
};

export default NewsDetailPage;