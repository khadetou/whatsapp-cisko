"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import LocaleSwitcher from "../../components/locale-switcher";
import useDictionnaries from "@/modules/hooks/useDictionnaries";
import { usePathname } from "next/navigation";

interface HeaderProps {
  dictionary: {
    header: {
      home: string;
      aboutUs: string;
      events: string;
      volunteer: string;
      donateNow: string;
      campaign: string;
      contact: string;
      contactUs: string;
    };
    heroSection: {
      topTitle: string;
      mainTitle: string;
      paragraph: string;
      donateButton: string;
    };
  };
}
const Header: FC<HeaderProps> = ({ dictionary }) => {
  const [active, setActive] = useState(false);
  const { setdictionnaries } = useDictionnaries();
  const pathname = usePathname();
  const {
    header: {
      home,
      aboutUs,
      campaign,
      contact,
      donateNow,
      events,
      volunteer,
      contactUs,
    },
  } = dictionary;

  useEffect(() => {
    if (dictionary) {
      setdictionnaries(dictionary);
    }
  }, [dictionary]);

  return (
    <header className="hoperaiser-header" id="sticky-header">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-2 lg:!tw-w-[12%]">
            <div className="mobile-flex">
              <div className="hoperaiser-logo">
                <Link
                  className="tw-relative tw-inline-block tw-w-[124px] tw-h-[49px]"
                  href="/"
                >
                  <Image
                    fill
                    sizes="100%"
                    src="/images/logo.svg"
                    className="tw-object-fit-cover "
                    alt="Hoperaiser"
                  />
                </Link>
              </div>
              <div
                className="hamburger-menu"
                onClick={() => setActive(!active)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              className={`tw-bg-black/30 tw-fixed tw-top-0 tw-bottom-0 tw-right-0 tw-left-0 z-1 ${
                active ? "tw-block" : "tw-hidden"
              }`}
              onClick={() => setActive(!active)}
            ></div>
            <div
              className={`hoperaiser-menu hoperaiser-menu-v3 ${
                active ? "active" : ""
              }`}
            >
              <div className="close-btn" onClick={() => setActive(!active)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              {/* <div className="mobile-search">
                <div className="hoperaiser-serach">
                  <form action="#">
                    <input type="search" placeholder="Search Here..." />
                    <button type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div> */}
              <nav>
                <ul className="tw-m-0 tw-p-0 tw-flex tw-flex-col lg:tw-flex-row tw-justify-center">
                  <li
                    className={
                      pathname === "/en" ||
                      pathname === "/fr" ||
                      pathname === "/"
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/" className="sub-btn">
                      {home}
                    </Link>
                  </li>
                  <li className={pathname.endsWith("/about") ? "active" : ""}>
                    <Link href="/about">{aboutUs}</Link>
                  </li>
                  <li className={pathname.endsWith("/events") ? "active" : ""}>
                    <Link href="/events" className="sub-btn">
                      {events}
                    </Link>
                  </li>
                  <li
                    className={
                      pathname.endsWith("/campaigns") ||
                      pathname.endsWith("/supportEducation") ||
                      pathname.endsWith("/sustainability") ||
                      pathname.endsWith("/villageAutonome")
                        ? "active"
                        : ""
                    }
                  >
                    <Link href="/campaigns" className="sub-btn">
                      {campaign}
                    </Link>
                  </li>
                  <li
                    className={pathname.endsWith("/volunteer") ? "active" : ""}
                  >
                    <Link href="/volunteer" className="sub-btn">
                      {volunteer}
                    </Link>
                  </li>

                  <li
                    className={pathname.endsWith("/contact-us") ? "active" : ""}
                  >
                    <Link href="/contact-us">{contact}</Link>
                  </li>
                </ul>
              </nav>
              <div className="mobile-user-contact-top">
                <div className="hoperaiser-top-user">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="hoperaiser-top-contact">
                  <p>
                    <span>{contactUs}</span> <br />
                    <a href="tel:+914346548765">+91 434 654 8765</a>
                  </p>
                </div>
              </div>
              <div className="mobile-user-contact-top tw-min-h-[59px] tw-w-full tw-mt-5 tw-relative">
                <LocaleSwitcher />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="hoperaiser-menu-right">
              {/* <div className="hoperaiser-serach">
                <form action="#">
                  <input type="search" placeholder="Search Here..." />
                  <button type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </form>
              </div> */}
              <div className="hoperaiser-top-user tw-py-9">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </a>
              </div>
              <div className="hoperaiser-top-contact ">
                <p>
                  <span>{contactUs}</span> <br />
                  <a href="tel:+221772153704">(+221) 77 215 37 04</a>
                </p>
              </div>
              <div className="tw-pl-11 tw-h-11 tw-relative">
                <LocaleSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
