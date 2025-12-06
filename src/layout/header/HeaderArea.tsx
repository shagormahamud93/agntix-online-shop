"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@/svg/SearchIcon";
import UserIcon from "@/svg/UserIcon";
import CartIcon from "@/svg/CartIcon";
import HeartIcon from "@/svg/HeartIcon";
import Menus from "./Menus";

const HeaderArea = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  return (
    <>
      <header>
        <div className="header__area header__transparent">
          <div
            className="header__bottom-13 header__padding-7 header__black-3 header__bottom-border-4 grey-bg-17 header__sticky"
            id="header-sticky"
          >
            <div className="container-fluid">
              <div className="mega-menu-wrapper p-relative">
                <div className="row align-items-center">
                  <div className="col-xxl-1 col-xl-2 col-lg-4 col-md-4 col-sm-5 col-8">
                    <div className="logo">
                      <Link href="/home">
                        <Image width={120} height={30} src="/assets/img/logo/logo-pink-black.png" alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
                    <div className="main-menu main-menu-13 pl-45 main-menu-ff-space">
                      <nav id="mobile-menu-3">
                        <Menus />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-xl-3 col-lg-8 col-md-8 col-sm-7 col-4">
                    <div className="header__bottom-right-13 d-flex justify-content-end align-items-center pl-30">
                      <div className="header__search-13">
                        <form action="#">
                          <div className="header__search-input-13 d-none d-xxl-block">
                            <input
                              type="text"
                              placeholder="Search for products..."
                            />
                            <button type="submit">
                              <SearchIcon />
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="header__action-13 d-none d-md-block">
                        <ul>
                          <li className="d-xxl-none">
                            <a href="#">
                              <SearchIcon />
                            </a>
                          </li>
                          <li>
                            <Link href="/login">
                              <UserIcon />
                            </Link>
                          </li>
                          <li>
                            <Link href="/wishlist">
                              <HeartIcon />
                              <span className="tp-item-count">7</span>
                            </Link>
                          </li>
                          <li>
                            <button
                              className="cartmini-open-btn"
                              onClick={() => setIsCartOpen(!isCartOpen)}
                            >
                              <CartIcon />
                              <span className="tp-item-count">3</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="header__hamburger ml-30 d-xl-none">
                        <button
                          onClick={() => setIsOffCanvasOpen(true)}
                          type="button"
                          className="hamburger-btn hamburger-btn-black offcanvas-open-btn"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* cart mini area start */}
      {/* <CartSidebar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} /> */}
      {/* cart mini area end */}

      {/* off canvas start */}
      {/* <OffCanvasSix
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      /> */}
      {/* off canvas end */}
    </>
  );
};

export default HeaderArea;
