import { redirect } from "next/navigation";

const defaultCategoryId = "0";

export default async function Home() {

  return (
   redirect(`/category/${defaultCategoryId}`)
  );
}
