import ShopBreadcrumb from "@/src/components/breadcrumb/ShopBreadcrumb";
import FooterArea from "@/src/layout/footer/FooterArea";
import HeaderArea from "@/src/layout/header/HeaderArea";
import Wrapper from "@/src/layout/Wrapper";
import ShopArea from "@/src/shop/ShopArea";

const ShopMain = () => {
    return (
        <Wrapper>
            <HeaderArea/>
            <ShopBreadcrumb />
            <ShopArea />
            <FooterArea />
        </Wrapper>
    );
};

export default ShopMain;