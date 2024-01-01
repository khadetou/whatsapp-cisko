import Image from "next/image";
import { FC } from "react";

interface ContactUsProps {
  contactUs: {
    subtitle: string;
    title: string;
    paragraph: string;
    form: {
      placeholders: {
        name: string;
        email: string;
        phone: string;
        subject: string;
        occupation: string;
      };
      messagePlaceholder: string;
      submitButton: string;
    };
  };
}
const ContactUs: FC<ContactUsProps> = ({
  contactUs: {
    subtitle,
    title,
    paragraph,
    form: {
      placeholders: { name, email, phone, subject, occupation },
      messagePlaceholder,
      submitButton,
    },
  },
}) => {
  return (
    <section className="contact-us">
      <div className="shape-contactus">
        <Image
          className="place-shape01"
          src="/images/shapes/rectangle12.png"
          alt=""
          width={159}
          height={175}
        />
        <Image
          className="place-shape02"
          src="/images/shapes/pie-half08.png"
          alt=""
          width={81}
          height={57}
        />
        <Image
          className="place-shape03"
          src="/images/shapes/pie-half09.png"
          alt=""
          width={93}
          height={69}
        />
        <Image
          className="place-shape04"
          src="/images/shapes/rectangle13.png"
          alt=""
          width={111}
          height={134}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="contact-wrap">
              <h4 className="!tw-text-primary">{subtitle}</h4>
              <h2>{title}</h2>
              <p>{paragraph}</p>
              <div className="contact-formv1">
                <form action="#" className="!tw-bg-secondary">
                  <div className="formv1">
                    <input type="text" name="name" placeholder={name} />
                    <input type="email" name="email" placeholder={email} />
                  </div>
                  <div className="formv1">
                    <input type="text" name="phone" placeholder={phone} />
                    <input type="text" name="subject" placeholder={subject} />
                  </div>
                  <div className="formv1">
                    <textarea
                      name="message"
                      placeholder={messagePlaceholder}
                    ></textarea>
                  </div>
                  <button className="btn-donate" type="submit">
                    {submitButton}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
