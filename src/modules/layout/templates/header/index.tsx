"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <header className="hoperaiser-header" id="sticky-header">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-2">
            <div className="mobile-flex">
              <div className="hoperaiser-logo">
                <Link
                  className="tw-relative tw-inline-block tw-w-[124px] tw-h-[34px]"
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
          <div className="col-lg-5">
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
              <div className="mobile-search">
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
              </div>
              <nav>
                <ul>
                  <li className="active">
                    <a href="#" className="sub-btn">
                      Home
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="index.html">Home V1</a>
                      </li>
                      <li>
                        <a href="home-v2.html">Home V2</a>
                      </li>
                      <li>
                        <a href="home-v3.html">Home V3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="#" className="sub-btn">
                      Events
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="events.html">Events</a>
                      </li>
                      <li>
                        <a href="events-v2.html">Events V2</a>
                      </li>
                      <li>
                        <a href="events-v3.html">Events V3</a>
                      </li>
                      <li>
                        <a href="events-details.html">Events Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="sub-btn">
                      Pages
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="our-team.html">Our Team</a>
                      </li>
                      <li>
                        <a href="our-team-v2.html">Our Team V2</a>
                      </li>
                      <li>
                        <a href="team-member-details.html">
                          Team Member Details
                        </a>
                      </li>
                      <li>
                        <a href="become-volunteer.html">Become Volunteer</a>
                      </li>
                      <li>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="faqs.html">Faqs</a>
                      </li>
                      <li>
                        <a href="campaign.html">Campaign</a>
                      </li>
                      <li>
                        <a href="campaign-v2.html">Campaign V2</a>
                      </li>
                      <li>
                        <a href="donation-details.html">Donation Details</a>
                      </li>
                      <li>
                        <a href="donate-now.html">Donate now</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">Blog left sidebar</a>
                      </li>
                      <li>
                        <a href="blog-full-width.html">Blog full width</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                      <li>
                        <a href="singn-up.html">Sign up</a>
                      </li>
                      <li>
                        <a href="singn-in.html">Sign In</a>
                      </li>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="error.html">Error</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                    <ul className="submenu">
                      <li>
                        <a href="contact-us-v1.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="contact-us-v2.html">Contact Us V2</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="mobile-user-contact-top">
                <div className="hoperaiser-top-user">
                  <a href="my-account.html">
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
                    <span>Contact Us</span> <br />
                    <a href="tel:+914346548765">+91 434 654 8765</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hoperaiser-menu-right">
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
              <div className="hoperaiser-top-user">
                <a href="my-account.html">
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
                  <span>Contact Us</span> <br />
                  <a href="tel:+914346548765">+91 434 654 8765</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
