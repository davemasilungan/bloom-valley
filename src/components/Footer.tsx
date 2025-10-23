"use client";

import Link from "next/link";
import Image from "next/image";
import SocialMediaIcons from "./ui/socialMediaIcons";
import NewsletterSubscribe from "@components/NewsletterSubscribe";

const Footer = () => {
  const footerNavLinks = [
    { isCompany: true, href: "/", label: "Home" },
    { isCompany: true, href: "/gallery", label: "Gallery" },
    { isCompany: true, href: "/about", label: "About" },
    { isCompany: true, href: "/events", label: "Events" },
    { isCompany: false, href: "/about", label: "Classes" },
    { isCompany: false, href: "/about", label: "Consultation" },
    { isCompany: false, href: "/about", label: "Free Planting" },
    { isCompany: false, href: "/about", label: "Tree Care" },
  ];

  return (
    <footer className="bg-[#014038] footer sm:footer-horizontal text-neutral-content items-center p-3 mt-3">
      <aside className="grid-flow-col items-center">
        <Link href="/">
          <Image
            src="/images/Client1_LogoPalette2_F7F7F7.png"
            alt="Bloom Valley Nursery Logo"
            width={40}
            height={40}
          />
        </Link>
        <Link href="/" className="ml-3 text-nowrap font-bold text-2xl">
          Bloom Valley Nursery
        </Link>
      </aside>
      <nav>
        <h3 className="text-xl font-bold">SERVICES</h3>
        <ul>
          {footerNavLinks
            .filter((link) => !link.isCompany)
            .map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <nav>
        <h3 className="text-xl font-bold">COMPANY</h3>
        <ul>
          {footerNavLinks
            .filter((link) => link.isCompany)
            .map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <NewsletterSubscribe />
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <SocialMediaIcons />
      </nav>
    </footer>
  );
};
export default Footer;
