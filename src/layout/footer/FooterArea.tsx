import payment from '../../../public/assets/img/footer/footer-payment.png';
import CopyrightText from './subComponent/CopyrightText';
import SingleWidget from './subComponent/SingleWidget';
import Image from "next/image";
import Link from "next/link";

const FooterArea = () => {
    return (
        <footer> <div className="footer__area footer__style-4 grey-bg-17">
                <div className="footer__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                                <div className="footer__widget footer__widget-11 mb-50 footer-col-11-1">
                                    <div className="footer__logo">
                                        <Link href="/home">
                                            <Image width={120} height={30} src="/assets/img/logo/logo-shop.png" alt="logo" />
                                        </Link>
                                    </div>

                                    <div className="footer__widget-content">
                                        <div className="footer__info">
                                            <p>
                                                Agntix — Your trusted online shopping destination.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <SingleWidget
                                col="3"
                                col_2="4"
                                col_3="3"
                                title="Main Navigation"
                                contents={[
                                    { url: "/", title: "Home" },
                                    { url: "/shop", title: "Shop" },
                                    { url: "/cart", title: "Cart" },
                                    { url: "/wishlist", title: "Wishlist" },
                                    { url: "/product-details", title: "Product Details" },

                                ]}
                            />
                            <SingleWidget
                                col="3"
                                col_2="3"
                                col_3="3"
                                title="Useful Links"
                                contents={[
                                    { url: "/faq", title: "FAQ" },
                                    { url: "/contact", title: "Contact" },
                                ]}
                            />

                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                                <div className="footer__widget mb-50 footer-col-11-5">
                                    <h3 className="footer__widget-title">Talk To Us</h3>

                                    <div className="footer__widget-content">
                                        <div className="footer__contact">
                                            <div className="footer__contact-call">
                                                <span>
                                                    <Link href="tel:+8801700000000">+880 1700 000 000</Link>
                                                </span>
                                            </div>

                                            <div className="footer__contact-mail">
                                                <span>
                                                    <Link href="mailto:support@agntix.com">support@agntix.com</Link>
                                                </span>
                                            </div>

                                            <div className="footer__contact-address" style={{ marginTop: "10px" }}>
                                                <span>
                                                    Level 5, House 12, Road 3,<br />
                                                    Dhanmondi, Dhaka – 1205, Bangladesh
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="container">
                        <div className="footer__bottom-inner">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="footer__copyright">
                                        <CopyrightText />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="footer__payment text-sm-end">
                                        <Image src={payment} alt="payment" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default FooterArea;