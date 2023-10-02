import Image from "next/image";
import { FC } from "react";

interface BlogsProps {
  successStoriesSection: {
    successStoriesTitle: string;
    latestNewsTitle: string;
    categories: {
      food: {
        title: string;
        content: {
          heading: string;
          description: string;
        };
      };
      education: {
        title: string;
        content: {
          heading: string;
          description: string;
        };
      };
      medicine: {
        title: string;
        content: {
          heading: string;
          description: string;
        };
      };
    };
    browseAll: string;
  };
}

const Blogs: FC<BlogsProps> = ({
  successStoriesSection: {
    browseAll,
    categories,
    latestNewsTitle,
    successStoriesTitle,
  },
}) => {
  return (
    <section className="blog-posts">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="heading-common"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <h3 className="tw-text-[#664218]">{successStoriesTitle}</h3>
              <h2>{latestNewsTitle} </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div
              className="blog-post-prev"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
            >
              <div className="blog-img">
                <Image
                  width={375}
                  height={235}
                  src="/images/home/blog-preview01.png"
                  alt=""
                />
                <div className="blog-post-date">
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
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </span>
                  <p>26 March, 2023</p>
                </div>
              </div>
              <div className="post-excerpt">
                <div className="post-label">
                  <div className="post-user">
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
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <a href="#">By- Admin</a>
                  </div>
                  <div className="post-category">
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
                          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 6h.008v.008H6V6z"
                        />
                      </svg>
                    </span>
                    <a href="blog-right-sidebar.html">
                      {categories.food.title}
                    </a>
                  </div>
                </div>
                <div className="post-des-txt">
                  <h3>{categories.food.content.heading}</h3>
                  <p>{categories.food.content.description}</p>
                  <a href="blog-details.html">{browseAll}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              className="blog-post-prev"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <div className="blog-img">
                <img src="/images/home/blog-preview02.png" alt="" />
                <div className="blog-post-date">
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
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </span>
                  <p>25 March, 2023</p>
                </div>
              </div>
              <div className="post-excerpt">
                <div className="post-label">
                  <div className="post-user">
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
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <a href="#">By- Admin</a>
                  </div>
                  <div className="post-category">
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
                          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 6h.008v.008H6V6z"
                        />
                      </svg>
                    </span>
                    <a href="blog-right-sidebar.html">
                      {categories.education.title}
                    </a>
                  </div>
                </div>
                <div className="post-des-txt">
                  <h3>{categories.education.content.heading}</h3>
                  <p>{categories.education.content.description}</p>
                  <a href="blog-details.html">{browseAll}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              className="blog-post-prev"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-easing="ease-in-sine"
            >
              <div className="blog-img">
                <img src="/images/home/blog-preview03.png" alt="" />
                <div className="blog-post-date">
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
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </span>
                  <p>26 March, 2023</p>
                </div>
              </div>
              <div className="post-excerpt">
                <div className="post-label">
                  <div className="post-user">
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
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </span>
                    <a href="#">By- Admin</a>
                  </div>
                  <div className="post-category">
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
                          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 6h.008v.008H6V6z"
                        />
                      </svg>
                    </span>
                    <a href="blog-right-sidebar.html">
                      {categories.medicine.title}
                    </a>
                  </div>
                </div>
                <div className="post-des-txt">
                  <h3>{categories.medicine.content.heading}</h3>
                  <p>{categories.medicine.content.description}</p>
                  <a href="blog-details.html">{browseAll}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              className="browse-all-charity browse-blogs"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <a className="btn-primary-c" href="blog.html">
                {browseAll}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
