import Image from "next/image";
import { FC } from "react";

interface FunFactProps {
  objectives: {
    title: string;
    fundraising: string;
    donations: string;
    volunteers: string;
    reviews: string;
    belief: string;
  };
}

const FunFact: FC<FunFactProps> = ({
  objectives: { fundraising, donations, volunteers, reviews, belief },
}) => {
  return (
    <section className="object-v2">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-6">
                <div
                  className="object-single-content"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <div className="icon-object icon-object01">
                    <Image
                      width={48}
                      height={48}
                      src="/images/icon-svg/advertising.svg"
                      alt=""
                    />
                  </div>
                  <h3>
                    <span className="counter">3</span>+
                  </h3>
                  <p>{fundraising}</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div
                  className="object-single-content"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="icon-object icon-object02">
                    <Image
                      width={48}
                      height={48}
                      src="/images/icon-svg/money.svg"
                      alt=""
                    />
                  </div>
                  <h3>
                    $<span className="counter">0</span>M+
                  </h3>
                  <p>{donations}</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div
                  className="object-single-content"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                >
                  <div className="icon-object icon-object03">
                    <Image
                      width={48}
                      height={48}
                      src="/images/icon-svg/user.svg"
                      alt=""
                    />
                  </div>
                  <h3>
                    <span className="counter">3</span>+
                  </h3>
                  <p>{volunteers}</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <div
                  className="object-single-content"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="2500"
                >
                  <div className="icon-object icon-object04">
                    <Image
                      width={48}
                      height={48}
                      src="/images/icon-svg/trending-up.svg"
                      alt=""
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
    </section>
  );
};

export default FunFact;
