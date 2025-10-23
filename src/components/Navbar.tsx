"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "@components/Cart";
import Profile from "@components/Profile";
import { useCart } from "@lib/context/CartContext";

const Navbar = () => {
  const closePopoverMenu = () => {
    const elem = document.activeElement;
    if (elem instanceof HTMLElement) {
      elem?.blur();
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/", label: "Sign In" },
    { href: "/", label: "Sign Up" },
  ];

  const { cartItems } = useCart();

  // If cart has items, remove "Sign In" and "Sign Up" from Hamburger dropdown menu
  const filteredNavLinks =
    cartItems.length > 0
      ? navLinks.filter(
          (link) => link.label !== "Sign In" && link.label !== "Sign Up"
        )
      : navLinks;

  return (
    <div className="navbar bg-[#014038] sticky top-0 z-50 text-[#F7F7F7]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-[#014038] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {/* Hamburger dropdown menu navigationlinks */}
            {filteredNavLinks.map((link, index) => (
              <li onClick={closePopoverMenu} key={index} className="w-full">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/">
          <Image
            src="/images/Client1_LogoPalette2_F7F7F7.png"
            alt="Bloom Valley Nursery Logo"
            width={40}
            height={40}
          />
        </Link>
        <Link
          href="/"
          className="ml-2 text-nowrap font-bold text-lg sm:text-2xl"
        >
          Bloom Valley Nursery
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-xl pt-2 menu-horizontal px-1">
          {/* Horizontal navigation links - excluding "Sign In" and "Sign Up" if cart has items */}
          {navLinks
            .filter(
              (link) => link.label !== "Sign In" && link.label !== "Sign Up"
            )
            .map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
        </ul>
      </div>
      {/* Right Side - If Cart has items show Cart and Profile icons else show "Sign In" and "Sign Up" buttons */}
      <div className="navbar-end">
        {cartItems.length > 0 ? (
          <div className="mr-2">
            <Cart />
            <Profile />
          </div>
        ) : (
          <div className="hidden md:flex">
            <Link
              href="/"
              className="btn btn-link no-underline text-foreground"
            >
              Sign In
            </Link>
            <Link href="/" className="btn ml-1.5">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
