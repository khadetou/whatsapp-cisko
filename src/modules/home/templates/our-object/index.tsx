import Image from "next/image";
import { FC } from "react";

interface OurObjectProps {
  objectives:
    | {
        title: string;
        fundraising: string;
        donations: string;
        volunteers: string;
        reviews: string;
        belief: string;
      }
    | {
        title: string;
        fundraising: string;
        donations: string;
        volunteers: string;
        reviews: string;
        belief: string;
      };
}
const OurObject: FC<OurObjectProps> = ({
  objectives: { belief, donations, fundraising, reviews, volunteers, title },
}) => {
  return (
    <section className="our-object">
      <div className="shape-object-section">
        <Image
          src="/images/shapes/rectangle05.png"
          width={143}
          height={172}
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="object-left">
              <h2
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                {title}
              </h2>
              <div className="object-double-col">
                <div className="row">
                  <div className="col-lg-6 col-md-3 col-6">
                    <div
                      className="object-single-content"
                      data-aos="fade-right"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                    >
                      <div className="icon-object icon-object01">
                        <Image
                          src="/images/icon-svg/advertising.svg"
                          alt=""
                          width={48}
                          height={48}
                        />
                      </div>
                      <h3>
                        <span className="counter">10000</span>+
                      </h3>
                      <p>{fundraising}</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-3 col-6">
                    <div
                      className="object-single-content"
                      data-aos="fade-right"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      <div className="icon-object icon-object02">
                        <Image
                          src="/images/icon-svg/money.svg"
                          alt=""
                          width={48}
                          height={48}
                        />
                      </div>
                      <h3>
                        $<span className="counter">120</span>M+
                      </h3>
                      <p>{donations}</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-3 col-6">
                    <div
                      className="object-single-content"
                      data-aos="fade-right"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                    >
                      <div className="icon-object icon-object03">
                        <Image
                          src="/images/icon-svg/user.svg"
                          width={48}
                          height={48}
                          alt=""
                        />
                      </div>
                      <h3>
                        <span className="counter">1200</span>+
                      </h3>
                      <p>{volunteers}</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-3 col-6">
                    <div
                      className="object-single-content"
                      data-aos="fade-right"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      <div className="icon-object icon-object04">
                        <Image
                          src="/images/icon-svg/trending-up.svg"
                          alt=""
                          width={48}
                          height={48}
                        />
                      </div>
                      <h3>
                        <span className="counter">98</span>%
                      </h3>
                      <p>{reviews}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="object-right">
              <p
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                {belief}.{" "}
              </p>
              <div className="object-video-prev">
                <Image
                  data-aos="zoom-in-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  src="/images/home/object01.png"
                  className="!tw-inline"
                  alt=""
                  width={433}
                  height={519}
                />

                <div
                  className="object-video-shot"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <Image
                    src="/images/home/object-video-prev.png"
                    width={300}
                    height={312}
                    alt=""
                  />
                  <div className="play-video play-1">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurObject;
