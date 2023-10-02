import React, { FC } from "react";

interface FaqProps {
  faqSection:
    | {
        title: string;
        description: string;
        questions: {
          question: string;
          answer: string;
        }[];
      }
    | {
        title: string;
        description: string;
        questions: {
          question: string;
          answer: string;
        }[];
      };
}

const Faq: FC<FaqProps> = ({
  faqSection: { title, description, questions },
}) => {
  return (
    <section className="faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="heading-common"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <h2>{title}</h2>
              <p className="tw-max-w-[720px] tw-mx-auto">{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="faq-area">
              <div className="accordion" id="accordionHoperaiser">
                {questions.map(({ answer, question }, idx) => (
                  <div
                    key={idx}
                    className="accordion-item"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-easing="linear"
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {question}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionHoperaiser"
                    >
                      <div className="accordion-body">{answer}</div>
                    </div>
                  </div>
                ))}
                {/* <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-easing="linear"
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What kinds of services do charity organizations offer?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionHoperaiser"
                  >
                    <div className="accordion-body">
                      A charity organization is a non-profit organization that
                      aims to help people, animals, or the environment by
                      providing various forms of assistance or support.
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-easing="linear"
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How can I donate to a charity organization?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionHoperaiser"
                  >
                    <div className="accordion-body">
                      A charity organization is a non-profit organization that
                      aims to help people, animals, or the environment by
                      providing various forms of assistance or support.
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-easing="linear"
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Can I volunteer for a charity organization?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionHoperaiser"
                  >
                    <div className="accordion-body">
                      A charity organization is a non-profit organization that
                      aims to help people, animals, or the environment by
                      providing various forms of assistance or support.
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
