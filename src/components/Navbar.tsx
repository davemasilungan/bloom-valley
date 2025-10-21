"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <div className="navbar bg-background sticky top-0 z-50">
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
            className="menu menu-sm dropdown-content bg-background rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link, index) => (
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
          className="ml-3 text-nowrap font-bold text-lg md:text-2xl"
        >
          Bloom Valley Nursery
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-xl pt-2 menu-horizontal px-1">
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
      <div className="navbar-end hidden md:flex">
        <Link href="/" className="btn btn-link no-underline text-foreground">
          Sign In
        </Link>
        <Link href="/" className="btn ml-1.5">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
