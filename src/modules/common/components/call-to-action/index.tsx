import Image from "next/image";
import { FC } from "react";

interface CallToActionProps {
  callToAction:
    | {
        savingSight: string;
        joinCommunity: string;
        ctaButtonJoin: string;
        contactUs: string;
      }
    | {
        savingSight: string;
        joinCommunity: string;
        ctaButtonJoin: string;
        contactUs: string;
      };
}
const CallToAction: FC<CallToActionProps> = ({
  callToAction: { contactUs, ctaButtonJoin, joinCommunity, savingSight },
}) => {
  return (
    <section className="cta">
      <div className="cta-shape">
        <Image
          width={150}
          height={170}
          src="/images/shapes/rectangle07.png"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div
              className="cta-left"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              <h3>{savingSight}</h3>
              <p>{joinCommunity}</p>
              <a
                className="btn-primary-c cta-btn-join"
                href="become-volunteer.html"
              >
                {ctaButtonJoin}
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div
              className="cta-right"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              <h3>{contactUs}</h3>
              <a
                className="tw-flex tw-justify-between tw-items-center"
                href="tel:+6549685234"
              >
                <span>
                  <Image
                    width={48}
                    height={48}
                    src="/images/icon-svg/phone-circle.svg"
                    alt=""
                  />
                </span>
                (+221) 77 215 37 04
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
