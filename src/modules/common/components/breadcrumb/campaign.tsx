import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface BreadCrumbProps {
  Campaign: {
    title: string;
    link: {
      acceuil: string;
      campaign: string;
    };
  };
}

const BreadCrumb: FC<BreadCrumbProps> = ({
  Campaign: {
    title,
    link: { campaign, acceuil },
  },
}) => {
  return (
    <section className="breadcrumb !tw-pt-[120px] !tw-pb-[108px]">
      <div className="shape-breadcrumb">
        <Image
          className="shape-bread01"
          width={63}
          height={63}
          src="/images/shapes/pie-half07.png"
          alt=""
        />
        <Image
          className="shape-bread02"
          width={143}
          height={77}
          src="/images/shapes/wave03.png"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-wrap">
              <p>
                <Link href="/">
                  <span>{acceuil}</span>
                </Link>{" "}
                {">"}
                <Link href="/campaigns">{campaign}</Link>
              </p>
              <h3>{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
