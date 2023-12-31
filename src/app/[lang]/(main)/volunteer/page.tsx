import BreadCrumb from "@/modules/common/components/breadcrumb/volunteer";
import SupportSystem from "@/modules/common/components/support-system";
import { Locale } from "@/modules/i18n/i18n.config";
import { getDictionary } from "@/modules/i18n/lib/dictionary";
import BecomVol from "@/modules/volunteer/components/becom-vol";
import RegisterForVol from "@/modules/volunteer/components/register-vol";
import WhatYouGet from "@/modules/volunteer/components/what-you-get";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { Volunteer, impactStatements } = await getDictionary(params.lang);
  return (
    <>
      <BreadCrumb Volunteer={Volunteer} />
      <BecomVol becomeVol={Volunteer.becomeVol} />
      <RegisterForVol registerVol={Volunteer.registerVol} />
      <WhatYouGet whatyouget={Volunteer.whatyouget} />
      <SupportSystem impactStatements={impactStatements} />
    </>
  );
}
