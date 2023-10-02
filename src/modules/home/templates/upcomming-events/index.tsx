import Image from "next/image";
import { FC } from "react";

interface UpcommingEventsProps {
  events:
    | {
        upcomingEvents: string;
        discoverEvents: string;
        eventsDescription: string;
        event1Title: string;
        event1Description: string;
      }
    | {
        upcomingEvents: string;
        discoverEvents: string;
        eventsDescription: string;
        event1Title: string;
        event1Description: string;
      };
}
const UpcommingEvents: FC<UpcommingEventsProps> = ({
  events: {
    discoverEvents,
    event1Description,
    event1Title,
    eventsDescription,
    upcomingEvents,
  },
}) => {
  return (
    <section className="upcoming-events">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="heading-common"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <h3 className="!tw-text-[#664218]">{upcomingEvents}</h3>
              <h2 className="!tw-text-[#222]">{discoverEvents}</h2>
              <p className="!tw-text-[#00501f]">{eventsDescription}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div
              className="single-event"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <Image
                width={375}
                height={186}
                src="/images/home/upcoming-events01.png"
                alt=""
              />
              <a href="events-details.html">{event1Title}</a>
              <p>{event1Description}</p>
              <div className="wraperr-events-info">
                <div className="event-time">
                  <p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    08:00 am - 05:00 pm
                  </p>
                </div>
                <div className="event-location">
                  <p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </span>
                    Ontario, Canada
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              className="single-event"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <Image
                width={375}
                height={186}
                src="/images/home/upcoming-events02.png"
                alt=""
              />
              <a href="events-details.html">{event1Title}</a>
              <p>{event1Description}</p>
              <div className="wraperr-events-info">
                <div className="event-time">
                  <p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    08:00 am - 05:00 pm
                  </p>
                </div>
                <div className="event-location">
                  <p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </span>
                    Ontario, Canada
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              className="single-event"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <Image
                width={375}
                height={186}
                src="/images/home/upcoming-events03.png"
                alt=""
              />
              <a href="events-details.html">{event1Title}</a>
              <p>{event1Description}</p>
              <div className="wraperr-events-info">
                <div className="event-time">
                  <p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    08:00 am - 05:00 pm
                  </p>
                </div>
                <div className="event-location">
                  <p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </span>
                    Ontario, Canada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcommingEvents;
