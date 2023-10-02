import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {
  footer: {
    donateText: string;
    navigationTitle: string;
    navigationLinks: {
      faq: string;
      aboutUs: string;
      contactUs: string;
      donate: string;
      joinCommunity: string;
      events: string;
    };
    stayConnectedTitle: string;
    stayConnectedDescription: string;
    subscribePlaceholder: string;
    subscribeButton: string;
    quote: string;
    copyrightText: string;
    footerTermsLinks: {
      termsOfUse: string;
      termsAndPrivacy: string;
    };
  };
}
const Footer: FC<FooterProps> = ({
  footer: {
    copyrightText,
    donateText,
    footerTermsLinks,
    navigationLinks,
    navigationTitle,
    quote,
    stayConnectedDescription,
    stayConnectedTitle,
    subscribeButton,
    subscribePlaceholder,
  },
}) => {
  return (
    <footer className="footer-v1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-left">
              <Link href="/">
                <Image width={198} height={54} src="/images/logo.svg" alt="" />
              </Link>
              <p>{donateText}</p>
              <ul>
                <li>
                  <Link href="">
                    <Image
                      width={24}
                      height={24}
                      src="/images/icon-svg/facebook.svg"
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <Image
                      width={24}
                      height={24}
                      src="/images/icon-svg/twitter.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      width={24}
                      height={24}
                      src="/images/icon-svg/linkedin.svg"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-6">
            <div className="footer-middle">
              <h3>{navigationTitle}</h3>
              <ul>
                <li>
                  <a href="faqs.html">{navigationLinks.faq}</a>
                </li>
                <li>
                  <a href="about-us.html">{navigationLinks.aboutUs}</a>
                </li>
                <li>
                  <a href="contact-us-v1.html">{navigationLinks.contactUs}</a>
                </li>
                <li>
                  <a href="donate-now.html">{navigationLinks.donate}</a>
                </li>
                <li>
                  <a href="become-volunteer.html">
                    {navigationLinks.joinCommunity}
                  </a>
                </li>
                <li>
                  <a href="events.html">{navigationLinks.events}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="footer-right">
              <h3>{stayConnectedTitle}</h3>
              <p>{stayConnectedDescription}</p>
              <form action="#">
                <input type="email" placeholder="Email Address" />
                <button type="submit">{subscribeButton}</button>
              </form>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="footer-quote">
              <p>{quote}</p>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center custom-border">
          <div className="col-lg-12">
            <div className="liner-custom-v1"></div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="copyright-text">
              <p>{copyrightText}</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="footer-terms">
              <ul>
                <li>
                  <a href="#">{footerTermsLinks.termsOfUse}</a>
                </li>
                <li>
                  <a href="#">{footerTermsLinks.termsAndPrivacy}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
