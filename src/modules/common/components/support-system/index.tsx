import Image from "next/image";
import React, { FC } from "react";

interface SupportSystemProps {
  impactStatements: {
    brighterTomorrow: string;
    givingHearts: string;
    impactfulGiving: string;
    loveInAction: string;
    compassionCollective: string;
  };
  bg?: string;
}
const SupportSystem: FC<SupportSystemProps> = ({
  impactStatements: {
    brighterTomorrow,
    compassionCollective,
    givingHearts,
    impactfulGiving,
    loveInAction,
  },
  bg,
}) => {
  return (
    <section className={`support-system ${bg ? bg : "!tw-bg-secondary"}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="support-list">
              <div
                className="single-support-box !tw-bg-primary tw-flex tw-items-center"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <Image
                  width={40}
                  height={40}
                  src="/images/icon-svg/globe-hand.svg"
                  alt=""
                />
                <h4 className="!tw-text-white">{brighterTomorrow}</h4>
              </div>
              <div
                className="single-support-box !tw-bg-primary tw-flex tw-items-center"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <Image
                  width={40}
                  height={40}
                  src="/images/icon-svg/share-love.svg"
                  alt=""
                />
                <h4 className="!tw-text-white">{givingHearts}</h4>
              </div>
              <div
                className="single-support-box !tw-bg-primary tw-flex tw-items-center"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <Image
                  width={40}
                  height={40}
                  src="/images/icon-svg/join-love.svg"
                  alt=""
                />
                <h4 className="!tw-text-white">{impactfulGiving}</h4>
              </div>
              <div
                className="single-support-box !tw-bg-primary tw-flex tw-items-center"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="2000"
              >
                <Image
                  width={40}
                  height={40}
                  src="/images/icon-svg/love-action.svg"
                  alt=""
                />
                <h4 className="!tw-text-white">{loveInAction}</h4>
              </div>
              <div
                className="single-support-box !tw-bg-primary tw-flex tw-items-center "
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="2500"
              >
                <Image
                  width={40}
                  height={40}
                  src="/images/icon-svg/collect-money.svg"
                  alt=""
                />
                <h4 className="!tw-text-white">{compassionCollective}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSystem;
