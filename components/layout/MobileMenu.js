import Link from "next/link";
import { useState } from "react";
import useClickOutside from "../../util/outsideClick";


const MobileMenu = ({ isToggled, toggleClick }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    let domNode = useClickOutside(() => {
        setIsActive({
            status: false,
        });
    });
    return (
        <>
            <div
                className={
                    isToggled
                        ? "mobile-header-active mobile-header-wrapper-style sidebar-visible"
                        : "mobile-header-active mobile-header-wrapper-style"
                }
            >
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <Link href="/">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/logo.svg"
                                        alt="logo"
                                    />
                                </p>
                            </Link>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button
                                className="close-style search-close"
                                onClick={toggleClick}
                            >
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search search-style-3 mobile-header-border">
                            <form action="#">
                                <input
                                    type="text"
                                    placeholder="Search for items…"
                                />
                                <button type="submit">
                                    <i className="fi-rs-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="mobile-menu-wrap mobile-header-border">
                            <div className="main-categori-wrap mobile-header-border">
                                <Link href="#">
                                    <a className="categori-button-active-2">
                                        <span className="fi-rs-apps"></span> Browse
                                        Categories
                                    </p>
                                </Link>
                                <div className="categori-dropdown-wrap categori-dropdown-active-small">
                                    <ul>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-dress"></i>
                                                    Women's Clothing
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-tshirt"></i>
                                                    Men's Clothing
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            {" "}
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-smartphone"></i>{" "}
                                                    Cellphones
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-desktop"></i>
                                                    Computer & Office
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-cpu"></i>
                                                    Consumer Electronics
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-home"></i>
                                                    Home & Garden
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-high-heels"></i>
                                                    Shoes
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-teddy-bear"></i>
                                                    Mother & Kids
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-kite"></i>
                                                    Outdoor fun
                                                </p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <nav>
                                <ul className="mobile-menu" ref={domNode}>
                                    <li
                                        className={
                                            isActive.key == 1
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(1)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="/index">
                                            <a>Home</p>
                                        </Link>
                                        <ul
                                            className={
                                                isActive.key == 1
                                                    ? "dropdown"
                                                    : "d-none"
                                            }
                                        >
                                            <li>
                                                <Link href="/index">
                                                    <a>Home 1</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/index-2">
                                                    <a>Home 2</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/index-3">
                                                    <a>Home 3</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/index-4">
                                                    <a>Home 4</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 2
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(2)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                       <Link href="/shop-grid-right">
                                            <a>shop</p>
                                        </Link>
                                        <ul
                                            className={
                                                isActive.key == 2
                                                    ? "dropdown"
                                                    : "d-none"
                                            }
                                        >
                                            <li>
                                               <Link href="/shop-grid-right">
                                                    <a>
                                                        Shop Grid – Right
                                                        Sidebar
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-grid-left">
                                                    <a>
                                                        Shop Grid – Left Sidebar
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-list-right">
                                                    <a>
                                                        Shop List – Right
                                                        Sidebar
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-list-left">
                                                    <a>
                                                        Shop List – Left Sidebar
                                                    </p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-fullwidth">
                                                    <a>Shop - Wide</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-filter">
                                                    <a>Shop – Filter</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-wishlist">
                                                    <a>Shop – Wishlist</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-cart">
                                                    <a>Shop – Cart</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-checkout">
                                                    <a>Shop – Checkout</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-compare">
                                                    <a>Shop – Compare</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 3
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(3)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="#">
                                            <a>Mega menu</p>
                                        </Link>
                                        <ul
                                            className={
                                                isActive.key == 3
                                                    ? "dropdown"
                                                    : "d-none"
                                            }
                                        >
                                            <li className="menu-item-has-children">
                                                <span className="menu-expand"></span>
                                                <Link href="#">
                                                    <a>Women's Fashion</p>
                                                </Link>
                                                <ul className="dropdown">
                                                    <li>
                                                        <Link href="/shop-product-right">
                                                            <a>Dresses</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-product-right">
                                                            <a>
                                                                Blouses & Shirts
                                                            </p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-product-right">
                                                            <a>
                                                                Hoodies &
                                                                Sweatshirts
                                                            </p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-product-right">
                                                            <a>Women's Sets</p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <span className="menu-expand"></span>
                                                <Link href="#">
                                                    <a>Men's Fashion</p>
                                                </Link>
                                                <ul className="dropdown">
                                                    <li>
                                                        <Link href="/shop-product-right">
                                                            <a>Jackets</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-product-right">
                                                            <a>
                                                                Casual Faux
                                                                Leather
                                                            </p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-product-right">
                                                            <a>
                                                                Genuine Leather
                                                            </p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <span className="menu-expand"></span>
                                                <Link href="#">
                                                    <a>Technology</p>
                                                </Link>
                                                <ul className="dropdown">
                                                    <li>
                                                        <Link href="/shop-product-right">
                                                            <a>
                                                                Gaming Laptops
                                                            </p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-product-right">
                                                            <a>
                                                                Ultraslim
                                                                Laptops
                                                            </p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-product-right">
                                                            <a>Tablets</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-product-right">
                                                            <a>
                                                                Laptop
                                                                Accessories
                                                            </p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-product-right">
                                                            <a>
                                                                Tablet
                                                                Accessories
                                                            </p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 4
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(4)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="/blog-category-fullwidth">
                                            <a>Blog</p>
                                        </Link>
                                        <ul
                                            className={
                                                isActive.key == 4
                                                    ? "dropdown"
                                                    : "d-none"
                                            }
                                        >
                                            <li>
                                                <Link href="/blog-category-grid">
                                                    <a>Blog Category Grid</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-category-list">
                                                    <a>Blog Category List</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-category-big">
                                                    <a>Blog Category Big</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-category-fullwidth">
                                                    <a>Blog Category Wide</p>
                                                </Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <span className="menu-expand"></span>
                                                <Link href="#">
                                                    <a>Single Product Layout</p>
                                                </Link>
                                                <ul className="dropdown">
                                                    <li>
                                                        <Link href="/blog-post-left">
                                                            <a>Left Sidebar</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-post-right">
                                                            <a>Right Sidebar</p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-post-fullwidth">
                                                            <a>No Sidebar</p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 5
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(5)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="#">
                                            <a>Pages</p>
                                        </Link>
                                        <ul
                                            className={
                                                isActive.key == 5
                                                    ? "dropdown"
                                                    : "d-none"
                                            }
                                        >
                                            <li>
                                                <Link href="/page-about">
                                                    <a>About Us</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-contact">
                                                    <a>Contact</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-account">
                                                    <a>My Account</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-login-register">
                                                    <a>login/register</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-purchase-guide">
                                                    <a>Purchase Guide</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-privacy-policy">
                                                    <a>Privacy Policy</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-terms">
                                                    <a>Terms of Service</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-404">
                                                    <a>404 Page</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 6
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(6)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="#">
                                            <a>Language</p>
                                        </Link>
                                        <ul
                                            className={
                                                isActive.key == 6
                                                    ? "dropdown"
                                                    : "d-none"
                                            }
                                        >
                                            <li>
                                                <Link href="#">
                                                    <a>English</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>French</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>German</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>Spanish</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-header-info-wrap mobile-header-border">
                            <div className="single-mobile-header-info mt-30">
                                <Link href="/page-contact">
                                    <a> Our location </p>
                                </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="/page-login-register">
                                    <a>Log In / Sign Up </p>
                                </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="#">
                                    <a>(+01) - 2345 - 6789 </p>
                                </Link>
                            </div>
                        </div>
                        <div className="mobile-social-icon">
                            <h5 className="mb-15 text-grey-4">Follow Us</h5>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook.svg"
                                        alt=""
                                    />
                                </p>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter.svg"
                                        alt=""
                                    />
                                </p>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram.svg"
                                        alt=""
                                    />
                                </p>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest.svg"
                                        alt=""
                                    />
                                </p>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube.svg"
                                        alt=""
                                    />
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
