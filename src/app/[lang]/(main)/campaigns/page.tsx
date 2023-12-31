import CampaignComponent from "@/modules/campaign/components/campaign";
import BreadCrumb from "@/modules/common/components/breadcrumb/campaign";
import SupportSystem from "@/modules/common/components/support-system";
import { Locale } from "@/modules/i18n/i18n.config";
import { getDictionary } from "@/modules/i18n/lib/dictionary";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { campaigns, impactStatements } = await getDictionary(params.lang);
  return (
    <>
      <BreadCrumb Campaign={campaigns.Campaign} />
      <CampaignComponent campaigns={campaigns} />
      <SupportSystem impactStatements={impactStatements} />
    </>
  );
}
