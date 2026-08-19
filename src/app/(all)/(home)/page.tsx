import BestSeller from "@/components/BestSeller/BestSeller";
import Brands from "@/components/Brands/Brands";
import Categories from "@/components/Categories/Categories";
import FlashSales from "@/components/FlashSales/FlashSales";
import Hero from "@/components/Hero/Hero";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import TopRated from "@/components/TopRated/TopRated";
import WhyUs from "@/components/WhyUs/WhyUs";

const HomePage = () => {
    return (
        <section>
            <Hero />
            <Categories />
            <HomeBanner index={0} />
            <FlashSales />
            <HomeBanner index={1} />
            <BestSeller />
            <HomeBanner index={2} />
            <Brands />
            <HomeBanner index={3} />
            <TopRated />
            <WhyUs />
        </section>
    );
};

export default HomePage;
