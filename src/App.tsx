import React from "react";

import Header from "./components/Header";
import TabsSection from "./components/TabsSection";

import heroSectionImage from "./assets/hero-section-image.webp";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-[2000px]">
      <div className="z-1000 sticky top-0">
        <Header />

        <TabsSection />
      </div>

      <div className="mx-5 lg:mx-auto lg:max-w-7xl py-5 flex flex-col gap-5">
        <div className="cursor-pointer">
          <img src={heroSectionImage} alt="" className="w-full" />
        </div>

        <ProductsSection />
      </div>

      <Footer />
    </div>
  );
};

export default App;
