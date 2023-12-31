import Image from "next/image";
import { FC } from "react";

interface OurCampaignProps {
  campaigns: {
    helpOthersTitle: string;
    introduceCampaignTitle: string;
    introduceCampaignText: string;
    booksCampaignTitle: string;
    booksCampaignText: string;
    booksCampaignGoals: string;
    booksCampaignRaised: string;
    foodTitle: string;
    foodCampaignTitle: string;
    foodCampaignText: string;
    foodCampaignGoals: string;
    foodCampaignRaised: string;
    healthTitle: string;
    healthCampaignTitle: string;
    healthCampaignText: string;
    healthCampaignGoals: string;
    healthCampaignRaised: string;
    educationTitle: string;
    educationCampaignTitle: string;
    educationCampaignText: string;
    educationCampaignGoals: string;
    educationCampaignRaised: string;
    btnDonate: string;
    btnBrowseAll: string;
  };
}
const Campaign: FC<OurCampaignProps> = ({
  campaigns: {
    booksCampaignGoals,
    booksCampaignRaised,
    booksCampaignText,
    booksCampaignTitle,
    btnBrowseAll,
    btnDonate,
    foodCampaignGoals,
    foodCampaignRaised,
    foodCampaignText,
    foodCampaignTitle,
    foodTitle,
    healthCampaignGoals,
    healthCampaignRaised,
    healthCampaignText,
    healthCampaignTitle,
    healthTitle,
    helpOthersTitle,
    introduceCampaignText,
    introduceCampaignTitle,
    educationCampaignGoals,
    educationCampaignRaised,
    educationCampaignText,
    educationCampaignTitle,
    educationTitle,
  },
}) => {
  return (
    <section className="our-campaign !tw-bg-secondary">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="heading-common"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              <h3 className="!tw-text-white">{helpOthersTitle}</h3>
              <h2 className="!tw-text-white">{introduceCampaignTitle}</h2>
              <p className="max-w-[564px] !tw-text-white mx-auto">
                {introduceCampaignText}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div
              className="single-donation-box tw-flex tw-flex-col tw-justify-between tw-min-h-[571px]"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <div className="donation-top-view">
                <Image
                  src="/images/home/campaign01.png"
                  alt=""
                  width={326}
                  height={204}
                />
                <div className="donation-category">
                  <p>{educationTitle}</p>
                </div>
              </div>
              <div className="donation-bottom-description">
                <h3>{educationCampaignTitle}</h3>
                <p>{educationCampaignText}</p>
                <div className="donation-progress-bar">
                  <div id="campaign01"></div>
                  <div className="achive-goal">
                    <div className="goal">
                      <h5>
                        {educationCampaignGoals}
                        {/* <span>$25000</span> */}
                      </h5>
                    </div>
                    <div className="raise-donation">
                      <h5>
                        {educationCampaignRaised}
                        {/* <span>21000</span> */}
                      </h5>
                    </div>
                  </div>
                  <a className="btn-donate" href="donate-now.html">
                    {btnDonate}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              className="single-donation-box tw-flex tw-flex-col tw-justify-between tw-min-h-[571px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              <div className="donation-top-view">
                <Image
                  src="/images/home/reforestation.jpg"
                  alt=""
                  width={326}
                  height={204}
                />
                <div className="donation-category">
                  <p>{foodTitle}</p>
                </div>
              </div>
              <div className="donation-bottom-description">
                <h3>{foodTitle}</h3>
                <p>{foodCampaignText}</p>
                <div className="donation-progress-bar">
                  <div id="campaign02"></div>
                  <div className="achive-goal">
                    <div className="goal">
                      <h5>
                        {foodCampaignGoals}
                        {/* <span>$35000</span> */}
                      </h5>
                    </div>
                    <div className="raise-donation">
                      <h5>
                        {foodCampaignRaised}
                        {/* <span>25000</span> */}
                      </h5>
                    </div>
                  </div>
                  <a className="btn-donate" href="donate-now.html">
                    {btnDonate}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              className="single-donation-box tw-flex tw-flex-col tw-justify-between tw-min-h-[571px]"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-easing="linear"
            >
              <div className="donation-top-view">
                <Image
                  src="/images/home/village.jpg"
                  alt=""
                  width={326}
                  height={204}
                />
                <div className="donation-category">
                  <p>{healthTitle}</p>
                </div>
              </div>
              <div className="donation-bottom-description">
                <h3>{healthCampaignTitle}</h3>
                <p>{healthCampaignText}</p>
                <div className="donation-progress-bar">
                  <div id="campaign03"></div>
                  <div className="achive-goal">
                    <div className="goal">
                      <h5>
                        {healthCampaignGoals}
                        {/* <span>$30000</span> */}
                      </h5>
                    </div>
                    <div className="raise-donation">
                      <h5>
                        {healthCampaignRaised}
                        {/* <span>28000</span> */}
                      </h5>
                    </div>
                  </div>
                  <a className="btn-donate" href="donate-now.html">
                    {btnDonate}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              className="browse-all-charity"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <a className="btn-primary-c" href="campaign.html">
                {btnBrowseAll}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
