import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-v1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-left">
              <Link href="/">
                <Image
                  width={198}
                  height={54}
                  src="/images/logo-v2.svg"
                  alt=""
                />
              </Link>
              <p>Donate and help others people around the world</p>
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
              <h3>Navigation's</h3>
              <ul>
                <li>
                  <a href="faqs.html">FAQ</a>
                </li>
                <li>
                  <a href="about-us.html">About us</a>
                </li>
                <li>
                  <a href="contact-us-v1.html">Contact Us</a>
                </li>
                <li>
                  <a href="donate-now.html">Donate</a>
                </li>
                <li>
                  <a href="become-volunteer.html">Join Our Community</a>
                </li>
                <li>
                  <a href="events.html">Events</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="footer-right">
              <h3>Stay connected</h3>
              <p>
                To ensure that you receive all the latest news and updates from
                our organization, we invite you to subscribe to our mailing list
              </p>
              <form action="#">
                <input type="email" placeholder="Email Address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="footer-quote">
              <p>
                At HopeRaiser, we are dedicated to making a positive impact in
                the lives of those we serve. We believe that every <br />{" "}
                individual has the power to create society.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center custom-border">
          <div className="col-lg-12">
            <div className="liner-custom-v1"></div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="copyright-text">
              <p>©HopeRaiser.com 2023. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="footer-terms">
              <ul>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Terms & Privacy</a>
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
