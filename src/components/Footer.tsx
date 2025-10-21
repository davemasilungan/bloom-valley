import Link from "next/link";
import Image from "next/image";

const ProductPromo = () => {
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
    <footer className="bg-background footer sm:footer-horizontal text-neutral-content items-center p-6 mt-6">
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
      <form>
        <h6 className="text-xl font-bold">NEWSLETTER</h6>
        <fieldset className="w-80">
          <label>Enter your email address</label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item mt-1"
            />
            <button className="btn bg-[#F0C06D] text-[#00231C] join-item mt-1">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a target="_blank" href="http://www.facebook.com" title="Facebook">
          <svg
            viewBox="0 0 512 512"
            preserveAspectRatio="xMidYMid meet"
            width="36"
            height="36"
            className="fill-current"
          >
            <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
          </svg>
        </a>

        {/* <a target="_blank" href="http://www.youtube.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
            role="img"
          >
            <title>Facebook Logo</title>
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a target="_blank" href="http://www.facebook.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
            role="img"
          >
            <title>Facebook Logo</title>
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a> */}
      </nav>
    </footer>
  );
};
export default ProductPromo;
