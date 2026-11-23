export const getCategories = async () => {
  "use cache";

  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );

  const data = await res.json();
  return data.data.news_category;
};

export const getNewsByCategoryId = async (categoryId) => {
  "use cache";

  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`,
  );

  const data = await res.json();
  return data.data;
};

export const getNewsDetails = async (newsDetailsId) => {
  "use cache";

  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${newsDetailsId}`,
  );

  const data = await res.json();
  return data.data[0];
};