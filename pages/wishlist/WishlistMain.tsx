import CartBreadcrumb from "@/src/components/breadcrumb/CartBreadcrumb";
import WishlistArea from "@/src/components/wishlist/WishlistArea";
import FooterArea from "@/src/layout/footer/FooterArea";
import HeaderArea from "@/src/layout/header/HeaderArea";
import Wrapper from "@/src/layout/Wrapper";

const WishlistMain = () => {
    return (
        <Wrapper>
            <HeaderArea />
            <CartBreadcrumb title='My Wishlist' subtitle='Wishlist' />
            <WishlistArea />
            <FooterArea />
        </Wrapper>
    );
};

export default WishlistMain;