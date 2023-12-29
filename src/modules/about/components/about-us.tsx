import Image from "next/image";
import { FC } from "react";

interface AboutUsProps {
  aboutUs: {
    title: string;
    subtitle: string;
    description: string;
    discoverMore: string;
    energy: string;
    villages: string;
    donate: string;
    volunteer: string;
  };
}
const AboutUs: FC<AboutUsProps> = ({
  aboutUs: {
    title,
    subtitle,
    description,
    discoverMore,
    energy,
    villages,
    donate,
    volunteer,
  },
}) => {
  return (
    <section className="about-us-v2">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-0 order-md-1 order-1">
            <div className="about-us-v2-left">
              <div
                className="heading-common heading-common-left-v2"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <h3>{subtitle}</h3>
                <h2>{title}</h2>
                <p>{description}</p>
                <a className="btn-primary-c" href="about-us.html">
                  {discoverMore}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 order-lg-1 order-md-0 order-0">
            <div className="about-us-v2-right">
              <div className="message-donation">
                <div
                  className="inner-box-message-top"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <p>{energy}</p>
                </div>
                <div
                  className="inner-box-message-bottom"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <p>{villages}</p>
                </div>
              </div>
              <Image
                className="donation-img01 tw-rounded-full"
                src="/images/about-us/energy.jpeg"
                alt=""
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                width={138}
                height={138}
              />
              <Image
                className="donation-img02 tw-rounded-full"
                src="/images/about-us/reboisement.jpg"
                alt=""
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                width={161}
                height={161}
              />
              <Image
                className="donation-img03 tw-rounded-full"
                src="/images/about-us/education.jpg"
                alt=""
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                width={138}
                height={138}
              />
              <div
                className="donate"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <h4>
                  <Image
                    src="/images/icon-svg/heart-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                  />{" "}
                  {donate}
                </h4>
              </div>
              <div
                className="volunteer"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <h4>
                  <Image
                    src="/images/icon-svg/volunteer-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                  />{" "}
                  {volunteer}
                </h4>
              </div>
              <div className="bubble-donation-shape">
                <Image
                  className="bubble-donation-s1"
                  src="/images/shapes/bubble06.png"
                  alt=""
                  width={47}
                  height={47}
                />
                <Image
                  className="bubble-donation-s2"
                  src="/images/shapes/bubble05.png"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
