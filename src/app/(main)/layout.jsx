import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import { Suspense } from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <BreakingNews />
      <Suspense fallback={<div className="h-16" />}>
        <Navbar />
      </Suspense>
      {children}
    </>
  );
};

export default MainLayout;
