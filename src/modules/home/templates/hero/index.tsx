import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface HeroProps {
  heroSection: {
    topTitle: string;
    mainTitle: string;
    paragraph: string;
    donateButton: string;
  };
}
const Hero: FC<HeroProps> = ({
  heroSection: { topTitle, mainTitle, paragraph, donateButton },
}) => {
  return (
    <section className="hero">
      <div className="shapes-hero">
        <Image
          className="shape-hero01"
          src="/images/shapes/spalish-shape01.png"
          alt=""
          width={143}
          height={77}
        />
        <Image
          className="shape-hero02"
          src="/images/shapes/pie-half01.png"
          alt=""
          width={28}
          height={28}
        />
        <Image
          className="shape-hero03"
          src="/images/shapes/rectangle01.png"
          alt=""
          width={100}
          height={240}
        />
        <Image
          className="shape-hero04"
          src="/images/shapes/rectangle02.png"
          alt=""
          width={200}
          height={214}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div
              className="hero-left"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <h5>{topTitle}</h5>
              <h1>
                {mainTitle} <br />
              </h1>
              <p>{paragraph}</p>
              <Link className="btn-primary-c" href="/donate">
                {donateButton}
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="hero-right">
              <div className="row">
                <div className="col-md-6 col-6">
                  <div className="hero-showcase-left">
                    <Image
                      className="hero-showcase01"
                      data-aos="zoom-out-up"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      src="/images/home/children01.png"
                      alt=""
                      width={275}
                      height={368}
                    />
                    <Image
                      className="hero-showcase02"
                      data-aos="zoom-out-up"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      src="/images/home/children02.png"
                      alt=""
                      width={275}
                      height={284}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="hero-showcase-right">
                    <Image
                      className="hero-showcase03"
                      data-aos="zoom-out-up"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      src="/images/home/children03.png"
                      alt=""
                      width={275}
                      height={98}
                    />
                    <Image
                      className="hero-showcase04"
                      data-aos="zoom-out-up"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      src="/images/home/children04.png"
                      alt=""
                      width={275}
                      height={368}
                    />
                    <Image
                      className="hero-showcase05"
                      data-aos="zoom-out-up"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                      src="/images/home/children05.png"
                      alt=""
                      width={275}
                      height={162}
                    />
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

export default Hero;
