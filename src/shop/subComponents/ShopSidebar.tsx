import ShopCategory from "./ShopCategory";
import ShopColor from "./ShopColor";
import ShopModel from "./ShopModel";
import ShopPrice from "./ShopPrice";

const ShopSidebar = ({ right_side }: { right_side?: string }) => {
    return (
        <div className={`shop__sidebar on-${right_side ? 'right' : 'left'}`}>
            <div className="shop__widget tp-accordion">
                <div className="accordion" id="shop_category">
                    <ShopCategory />
                </div>
            </div>
            <div className="shop__widget tp-accordion">
                <ShopModel />
            </div>
            <div className="shop__widget tp-accordion">
                <div className="accordion" id="shop_color">
                    <ShopColor />
                </div>
            </div>
            <div className="shop__widget tp-accordion">
                <div className="accordion" id="shop_price">
                    <ShopPrice />
                </div>
            </div>
        </div>
    );
};

export default ShopSidebar;
