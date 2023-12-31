"use client";
import Image from "next/image";
import { FC } from "react";
import { useParams } from "next/navigation";

const DonateNow: FC<any> = ({ donateNow }) => {
  const { id } = useParams();

  const donateData =
    id === "supportEducation"
      ? donateNow[0].supportEducation
      : id === "sustainability"
      ? donateNow[1].sustainability
      : donateNow[2].villageAutonome;

  const image =
    id === "supportEducation"
      ? "/images/home/campaign01.png"
      : id === "sustainability"
      ? "/images/home/reforestation.jpg"
      : "/images/home/village.jpg";

  return (
    <section className="donate-now">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-donation">
              <div
                className="heading-common heading-common-left"
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-easing="linear"
              >
                <h3>{donateData && donateData.subtitle}</h3>
                <h2>{donateData && donateData.title}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row donate-wrap">
          <div className="col-lg-7 pad-l-0 pad-r-0">
            <div className="donate-tabs">
              <ul
                className="nav nav-pills !tw-bg-secondary"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <button
                    className="nav-link active hover:!tw-text-primary"
                    id="pills-donationOnline-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-donationOnline"
                    type="button"
                    role="tab"
                    aria-controls="pills-donationOnline"
                    aria-selected="true"
                  >
                    {donateData && donateData.onlineButton}
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link hover:!tw-text-primary"
                    id="pills-donationOffline-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-donationOffline"
                    type="button"
                    role="tab"
                    aria-controls="pills-donationOffline"
                    aria-selected="false"
                  >
                    {donateData && donateData.offlineButton}
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-donationOnline"
                  role="tabpanel"
                  aria-labelledby="pills-donationOnline-tab"
                  tabIndex={0}
                >
                  <div className="tab-donation-info">
                    <form action="#">
                      <h3>{donateData && donateData.selectDonationAmount}</h3>
                      <div className="donation-ammount">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="btn-check"
                          checked
                        />
                        <label className="btn btn-primary" htmlFor="btn-check">
                          $10
                        </label>
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="btn-check-2"
                        />
                        <label
                          className="btn btn-primary"
                          htmlFor="btn-check-2"
                        >
                          $50
                        </label>
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="btn-check-3"
                        />
                        <label
                          className="btn btn-primary"
                          htmlFor="btn-check-3"
                        >
                          $100
                        </label>
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="btn-check-4"
                        />
                        <label
                          className="btn btn-primary"
                          htmlFor="btn-check-4"
                        >
                          $200
                        </label>
                      </div>
                      <span>{donateData && donateData.or}</span>
                      <div className="liner-custom-v2"></div>
                      <input
                        type="text"
                        name="ammount"
                        id="ammount"
                        placeholder={donateData && donateData.enterAmount}
                      />
                      <div className="liner-custom-v2"></div>
                      <span>{donateData && donateData.paymentMethod}</span>
                      <div className="slect-custom">
                        <select
                          className="form-select"
                          aria-label="Default select"
                        >
                          <option selected>
                            {donateData && donateData.selectTitle}
                          </option>
                          <option value="1">Paypal</option>
                          <option value="2">Wise</option>
                          <option value="3">Stripe</option>
                        </select>
                      </div>
                      <a href="#" className="btn-donate">
                        {donateData && donateData.donateButton}
                      </a>
                    </form>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-donationOffline"
                  role="tabpanel"
                  aria-labelledby="pills-donationOffline-tab"
                  tabIndex={0}
                >
                  <div className="tab-donate-details">
                    <h4>{donateData && donateData.transferFunds}</h4>
                    <div className="bank-details">
                      <h3>
                        <span>{donateData && donateData.bankName}:</span>{" "}
                        Example Bank
                      </h3>
                      <h3>
                        <span>{donateData && donateData.bankNumber}:</span>{" "}
                        123456789
                      </h3>
                      <h3>
                        <span>{donateData && donateData.orangeMoney}:</span>{" "}
                        EXBNUS33XXX
                      </h3>
                      <h3>
                        <span>{donateData && donateData.wave}:</span>{" "}
                        EXBNUS33XXX
                      </h3>
                    </div>
                    <p>
                      *Once you click on the donate button, your information
                      will be saved in our database as a pending transaction.
                      Once we verify your payment, we will send a receipt to
                      your email address.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pad-l-0 pad-r-0">
            <div className="donate-info-right">
              <Image src={image} alt="" width={463} height={309} />
              <div className="donate-goal-bar">
                <div className="donation-progress-bar">
                  <div id="donation01"></div>
                  <div className="achive-goal">
                    <div className="goal">
                      <h5>
                        Goals: <span>$25000</span>
                      </h5>
                    </div>
                    <div className="raise-donation">
                      <h5>
                        Raised : <span>21000</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <p>{donateData && donateData.paragraph1}</p>
              <p>{donateData && donateData.paragraph2}</p>
              <div className="event-benifits-right">
                <ul>
                  {donateData &&
                    donateData.benefits.map((benifit: any, index: number) => (
                      <li key={index}>{benifit}</li>
                    ))}
                  {/* <li>Get Some Exercise</li>
                  <li>Meet New People</li>
                  <li>Enjoy Fun Activities</li>
                  <li>Feel Good About Making a Difference</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateNow;
