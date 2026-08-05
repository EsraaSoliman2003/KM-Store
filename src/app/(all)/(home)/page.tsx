import BestSeller from "@/components/BestSeller/BestSeller";
import Brands from "@/components/Brands/Brands";
import Categories from "@/components/Categories/Categories";
import FlashSales from "@/components/FlashSales/FlashSales";
import Hero from "@/components/Hero/Hero";
import TopRated from "@/components/TopRated/TopRated";
import WhyUs from "@/components/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <Categories />
      <FlashSales />
      <BestSeller />
      <Brands />
      <TopRated />
      <WhyUs />
    </section>
  );
};

export default HomePage;
