import Image from "next/image";
import { FC } from "react";

interface BecomVolProps {
  becomeVol: {
    subtitle: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    btnCall: string;
    btnEmail: string;
  };
}
const BecomVol: FC<BecomVolProps> = ({
  becomeVol: { subtitle, title, paragraph1, paragraph2, btnCall, btnEmail },
}) => {
  return (
    <section className="become-vol">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="became-vol-left" data-aos="fade-up">
              <Image
                src="/images/volunteer/Frame.jpg"
                width={439}
                height={553}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="became-vol-right" data-aos="fade-up">
              <h4>{subtitle}</h4>
              <h2>{title}</h2>
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
              <div className="vol-btns">
                <a href="tel:123475895" className="btn-vol-yellow">
                  {btnCall}
                </a>
                <a href="mailto:hope@gmail.com" className="btn-vol-black">
                  {btnEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomVol;
