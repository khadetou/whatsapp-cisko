import Blogs from "@/modules/home/templates/blogs";
import CallToAction from "@/modules/home/templates/call-to-action";
import Faq from "@/modules/home/templates/faq";
import Hero from "@/modules/home/templates/hero";
import KidsWillGet from "@/modules/home/templates/kids-will-get";
import OurCampaign from "@/modules/home/templates/our-campaign";
import OurObject from "@/modules/home/templates/our-object";
import OurTeam from "@/modules/home/templates/our-team";
import SupportSystem from "@/modules/home/templates/support-system";
import Testimonials from "@/modules/home/templates/testimonials";
import UpcommingEvents from "@/modules/home/templates/upcomming-events";
import { Locale, i18n } from "@/modules/i18n/i18n.config";
import { getDictionary } from "@/modules/i18n/lib/dictionary";
export default async function Home({ params }: { params: { lang: Locale } }) {
  const {
    heroSection,
    impactStatements,
    supportingCauses,
    objectives,
    campaigns,
    callToAction,
    events,
    faqSection,
    successStoriesSection,
  } = await getDictionary(params.lang);
  return (
    <>
      <Hero heroSection={heroSection} />
      <SupportSystem impactStatements={impactStatements} />
      <KidsWillGet supportingCauses={supportingCauses} />
      <OurObject objectives={objectives} />
      <OurCampaign campaigns={campaigns} />
      {/* <OurTeam /> */}
      <CallToAction callToAction={callToAction} />
      <UpcommingEvents events={events} />
      <Faq faqSection={faqSection} />
      {/* <Testimonials /> */}
      <Blogs successStoriesSection={successStoriesSection} />
      <div className="extra-height"></div>
    </>
  );
}
