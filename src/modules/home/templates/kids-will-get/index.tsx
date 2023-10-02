import Image from "next/image";
import { FC } from "react";

interface KidsWillGetProps {
  supportingCauses: {
    kidsEducation: {
      title: string;
      description: string;
      link: {
        text: string;
        icon: string;
      };
    };
    healthyFood: {
      title: string;
      description: string;
      link: {
        text: string;
        icon: string;
      };
    };
    treatment: {
      title: string;
      description: string;
      link: {
        text: string;
        icon: string;
      };
    };
  };
}
const KidsWillGet: FC<KidsWillGetProps> = ({
  supportingCauses: { healthyFood, kidsEducation, treatment },
}) => {
  return (
    <section className="kids-get">
      <div className="shape-section2">
        <Image
          className="shape-kid01"
          src="/images/shapes/rectangle03.png"
          width={148}
          height={240}
          alt=""
        />
        <Image
          className="shape-kid02"
          src="/images/shapes/rectangle04.png"
          width={169}
          height={240}
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="single-offer"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-delay="1000"
                  data-aos-once="true"
                >
                  <div className="icon-offer icon-bg01">
                    <Image
                      width={20}
                      height={20}
                      src="/images/icon-svg/education.svg"
                      alt=""
                    />
                  </div>
                  <h4>{kidsEducation.title}</h4>
                  <p>{kidsEducation.description}</p>
                  <a href="donation-details.html">
                    {kidsEducation.link.text}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="single-offer"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-delay="1500"
                  data-aos-once="true"
                >
                  <div className="icon-offer icon-bg02">
                    <Image
                      width={20}
                      height={20}
                      src="/images/icon-svg/healthy-food.svg"
                      alt=""
                    />
                  </div>
                  <h4>{healthyFood.title}</h4>
                  <p>{healthyFood.description}</p>
                  <a href="donation-details.html">
                    {healthyFood.link.text}{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="single-offer"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-delay="2500"
                  data-aos-once="true"
                >
                  <div className="icon-offer icon-bg03">
                    <Image
                      width={20}
                      height={20}
                      src="/images/icon-svg/stethoscope.svg"
                      alt=""
                    />
                  </div>
                  <h4>{treatment.title}</h4>
                  <p>{treatment.description}</p>
                  <a href="donation-details.html">
                    {treatment.link.text}{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsWillGet;
