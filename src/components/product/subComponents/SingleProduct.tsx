import Image from "next/image";
import Link from "next/link";
import HeartIconTwo from "@/svg/HeartIconTwo";
import CompareIcon from "@/svg/CompareIcon";
import { ProductDataDT } from "@/src/types/product-dt";
import CartIconTwo from "@/svg/CartIconTwo";

interface SingleProductProps {
  product: ProductDataDT;
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  const { id, image, title, price, badge } = product || {};
  
  return (
     <div className="product__item p-relative transition-3 mb-50">
        <div className="product__thumb w-img p-relative fix">
          <Link href={`/product-details/${id}`}>
            <Image
              src={image}
              alt="product image"
              style={{ width: "100%", height: "100%" }}
            />
          </Link>

          {badge && (
            <div className="product__badge d-flex flex-column flex-wrap">
              <span
                className={`product__badge-item ${
                  badge === "new" ? "has-new" : ""
                }`}
              >
                {badge}
              </span>
            </div>
          )}

          <div className="product__action d-flex flex-column flex-wrap">
            <button type="button" className="product-action-btn">
              <HeartIconTwo />
              <span className="product-action-tooltip">Add To Wishlist</span>
            </button>
            <button type="button" className="product-action-btn">
              <CompareIcon />
              <span className="product-action-tooltip">Add To Compare</span>
            </button>
          </div>
          <div className="product__add transition-3">
            <button type="button" className="product-add-cart-btn w-100">
              <CartIconTwo />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product__content">
          <h3 className="product__title">
            <Link href={`/product-details/${id}`}>{title}</Link>
          </h3>
          <div className="product__price">
            <span className="product__ammount">${price}</span>
          </div>
        </div>
      </div>
  );
};

export default SingleProduct;
