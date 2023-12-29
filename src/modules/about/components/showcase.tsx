import Image from "next/image";
import { FC } from "react";

interface ShowcaseProp {
  showcase: {
    sentence1: string;
    sentence2: string;
  };
}
const Showcase: FC<ShowcaseProp> = ({ showcase: { sentence1, sentence2 } }) => {
  return (
    <div className="showcase-v3">
      <div className="showcase-shapes">
        <Image
          className="showcase-01"
          src="/images/shapes/rectangle09.png"
          alt=""
          width={200}
          height={240}
        />
        <Image
          className="showcase-02"
          src="/images/shapes/rectangle10.png"
          alt=""
          width={200}
          height={240}
        />
        <Image
          className="showcase-03"
          src="/images/shapes/pie-half02.png"
          alt=""
          width={204}
          height={152}
        />
        <Image
          className="showcase-04"
          src="/images/shapes/pie-half03.png"
          alt=""
          width={204}
          height={152}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-10 offset-xl-1 col-lg-12 col-md-12">
            <div className="showcase-v3-wrapper">
              <div
                className="message-text"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <div className="message-text-top message-icon01">
                  <Image
                    src="/images/icon-svg/money-bag.svg"
                    width={32}
                    height={32}
                    alt=""
                  />
                </div>
                <div className="message-text-bottom">
                  <p>{sentence1}</p>
                </div>
              </div>
              <div
                className="message-text"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="message-text-top message-icon02">
                  <Image
                    src="/images/icon-svg/donation.svg"
                    width={32}
                    height={32}
                    alt=""
                  />
                </div>
                <div className="message-text-bottom">
                  <p>{sentence2}</p>
                </div>
              </div>

              <div className="show-case-img tw-contents">
                <Image
                  width={267}
                  height={284}
                  src="/images/about-us/showcase1.jpeg"
                  alt=""
                  data-aos="zoom-in-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                />
                <Image
                  width={267}
                  height={349}
                  src="/images/about-us/showcase3.jpeg"
                  alt=""
                  data-aos="zoom-in-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                />
                <Image
                  width={267}
                  height={284}
                  src="/images/about-us/showcase2.jpeg"
                  alt=""
                  data-aos="zoom-in-right"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
