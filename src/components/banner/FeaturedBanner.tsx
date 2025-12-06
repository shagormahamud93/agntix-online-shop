import banner from '../../../public/assets/img/banner/banner-1.jpg';
import RightArrow from '@/svg/RightArrow';
import Link from "next/link";

const FeaturedBanner = () => {
    return (
        <section className="banner__area">
            <div className="container">
                <div className="banner__inner include-bg" style={{ backgroundImage: `url(${banner.src})` }}>
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="banner__content">
                                <span>Apple iPhone 18 Pro</span>
                                <h3 className="banner__title">
                                    <Link href="/product-details">The wait is on: iphon 18 max pro</Link>
                                </h3>
                                <p>Last call for up to <span>32%</span> off! </p>

                                <div className="banner__btn">
                                    <Link href="/product-details" className="tp-btn">
                                        Buy Now
                                        <RightArrow />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedBanner;