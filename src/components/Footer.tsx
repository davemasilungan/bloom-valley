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
    <footer
      aria-label="Site footer"
      className="bg-[#014038] footer lg:footer-horizontal text-[#F7F7F7] items-center p-2 pb-6 mt-2 mb-4"
    >
      <aside className="grid-flow-col items-center lg:pl-6">
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
      <nav aria-labelledby="services-nav-heading">
        <h3 id="services-nav-heading" className="text-xl font-bold">
          SERVICES
        </h3>
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
      <nav aria-labelledby="company-nav-heading">
        <h3 id="company-nav-heading" className="text-xl font-bold">
          COMPANY
        </h3>
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
      <nav
        aria-label="Social media links"
        className="grid-flow-col gap-4 lg:place-self-center lg:justify-self-end lg:pr-6"
      >
        <SocialMediaIcons />
      </nav>
    </footer>
  );
};
export default Footer;
