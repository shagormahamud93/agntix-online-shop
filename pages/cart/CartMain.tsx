import CartBreadcrumb from "@/src/components/breadcrumb/CartBreadcrumb";
import CartArea from "@/src/components/cart/CartArea";
import FooterArea from "@/src/layout/footer/FooterArea";
import HeaderArea from "@/src/layout/header/HeaderArea";
import Wrapper from "@/src/layout/Wrapper";

const CartMain = () => {
    return (
        <Wrapper>
            <HeaderArea/>
            <CartBreadcrumb title='My Cart' subtitle='Cart' />
            <CartArea />
            <FooterArea/>
        </Wrapper>
    );
};

export default CartMain;