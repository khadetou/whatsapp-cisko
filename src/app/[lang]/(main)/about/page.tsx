import AboutUs from "@/modules/about/components/about-us";
import BreadCrumb from "@/modules/about/components/breadcrumb";
import FunFact from "@/modules/about/components/fun-fact";
import Showcase from "@/modules/about/components/showcase";
import Video from "@/modules/about/components/video";
import CallToAction from "@/modules/common/components/call-to-action";
import { Locale } from "@/modules/i18n/i18n.config";
import { getDictionary } from "@/modules/i18n/lib/dictionary";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const {
    About,
    About: { aboutUs, showcase },
    objectives,
    callToAction,
  } = await getDictionary(params.lang);
  return (
    <>
      <BreadCrumb About={About} />
      <AboutUs aboutUs={aboutUs} />
      <Video />
      <FunFact objectives={objectives} />
      <CallToAction callToAction={callToAction} />
      <Showcase showcase={showcase} />
    </>
  );
}
