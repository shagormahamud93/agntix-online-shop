
import CouponClearCart from "./subComponents/CouponClearCart";
import SingleCartItem from "./subComponents/SingleCartItem";
import CartTotal from "./subComponents/CartTotal";
import products from "@/src/data/product";
import Link from "next/link";

// cart items
const cart_items = products.slice(0, 2);

const CartArea = () => {
  return (
    <section className="cart-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form>
              <div className="table-content table-responsive">
                <div className="tp-continue-shopping">
                  <p>
                    <Link href="/shop">
                      Continue Shopping <i className="fal fa-reply"></i>
                    </Link>
                  </p>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Images</th>
                      <th className="cart-product-name">Product</th>
                      <th className="product-price">Unit Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart_items.map((item, i) => (
                      <SingleCartItem key={i} {...item} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-12">
                  {/* coupon start */}
                  <CouponClearCart />
                  {/* coupon end */}
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="col-md-5 mr-auto">
                  {/* cart total */}
                  <CartTotal />
                  {/* cart total */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartArea;
