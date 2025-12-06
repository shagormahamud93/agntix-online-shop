"use client";
import { products_category } from "@/src/data/category-data";
import SingleCategory from "./subComponents/SingleCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Scrollbar } from "swiper/modules";

const ShopCategory = () => {
  const [loop, setLoop] = useState(false);
  useEffect(() => setLoop(true), [])

  return (
    <section className="product__category pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="section__title-wrapper-13 mb-35">
              <h3 className="section__title-13">Category view</h3> 
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="product__category-slider">
              <Swiper
                className="product__category-slider-active swiper-container"
                slidesPerView={4}
                spaceBetween={30}
                loop={loop}
                modules={[Scrollbar]}
                scrollbar={{
                  el: ".tp-scrollbar",
                }}
                breakpoints={{
                  1601: {
                    slidesPerView: 4,
                  },
                  1400: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                }}
              >
                {products_category.map((item, i) => (
                  <SwiperSlide key={i}>
                    <SingleCategory item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="tp-scrollbar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCategory;
