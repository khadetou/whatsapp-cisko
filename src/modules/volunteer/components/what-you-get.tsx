import Image from "next/image";
import { FC } from "react";

interface WhatYouGetProps {
  whatyouget: {
    subtitle: string;
    title: string;
    paragraph: string;
    benefitsList: string[];
    expression1: string;
    expression2: string;
  };
}

const WhatYouGet: FC<WhatYouGetProps> = ({
  whatyouget: {
    subtitle,
    title,
    paragraph,
    benefitsList,
    expression1,
    expression2,
  },
}) => {
  return (
    <section className="what-you-get">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div
              className="member-benefit"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <h4>{subtitle}</h4>
              <h2>{title}</h2>
              <p>{paragraph}</p>
              <ul>
                {benefitsList.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="helping-kids">
              <div
                className="kid-msg-top"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <p>{expression1}</p>
              </div>
              <Image
                className="kid01 tw-rounded-md"
                data-aos="zoom-out-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                src="/images/volunteer/kid01.jpg"
                width={320}
                height={421}
                alt=""
              />
              <Image
                className="kid02 tw-inline tw-text-left tw-rounded-md"
                data-aos="zoom-out-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                src="/images/volunteer/kid02.jpg"
                width={320}
                height={421}
                alt=""
              />
              <div
                className="kid-msg-bottom"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <p>{expression2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
