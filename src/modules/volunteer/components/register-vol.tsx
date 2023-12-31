import Image from "next/image";
import { FC } from "react";

interface RegisterVolProps {
  registerVol: {
    subtitle: string;
    title: string;
    paragraph1: string;
    formPlaceholders: {
      name: string;
      email: string;
      phone: string;
      address: string;
      occupation: string;
    };
    messageContent: string;
    submitButton: string;
  };
}
const RegisterForVol: FC<RegisterVolProps> = ({
  registerVol: {
    subtitle,
    title,
    paragraph1,
    formPlaceholders: { name, email, phone, address, occupation },
    messageContent,
    submitButton,
  },
}) => {
  return (
    <section className="register-for-vol">
      <div className="vol-patterns">
        <Image
          className="vol-pat01"
          src="/images/shapes/pie-half07.png"
          alt=""
          width={60}
          height={60}
        />
        <Image
          className="vol-pat02"
          src="/images/shapes/wave03.png"
          alt=""
          width={143}
          height={77}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div
              className="reg-for-vol-wrapper"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              <h4>{subtitle}</h4>
              <h2>{title}</h2>
              <p>{paragraph1}</p>
              <form action="#">
                <div className="form-wrapper">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-input">
                        <input type="text" name="name" placeholder={name} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-input">
                        <input type="email" name="email" placeholder={email} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-wrapper">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-input">
                        <input type="text" name="phone" placeholder={phone} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-input">
                        <input
                          type="text"
                          name="address"
                          placeholder={address}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-wrapper">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-input">
                        <input type="date" name="dob" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-input">
                        <input
                          type="text"
                          name="occupation"
                          placeholder={occupation}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-wrapper">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-input">
                        <textarea
                          name="message"
                          placeholder={messageContent}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn-primary-c">
                  {submitButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForVol;
