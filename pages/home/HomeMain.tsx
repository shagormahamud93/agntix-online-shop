import FeaturedBanner from "@/src/components/banner/FeaturedBanner";
import ShopCategory from "@/src/components/category/ShopCategory";
import ShopHeroBanner from "@/src/components/hero-banner/ShopHeroBanner";
import ShopProducts from "@/src/components/product/ShopProducts";
import ServiceHighlights from "@/src/components/service/ServiceHighlights";
import FooterArea from "@/src/layout/footer/FooterArea";
import HeaderArea from "@/src/layout/header/HeaderArea";
import Wrapper from "@/src/layout/Wrapper";

const HomeMain = () => {
    return (
        <Wrapper>
            <HeaderArea />
            <ShopHeroBanner/>
            <ShopCategory/>
            <ShopProducts/>
            <FeaturedBanner/>
            <ServiceHighlights/>
            <FooterArea/>
        </Wrapper>
    );
};

export default HomeMain;