import BreadCrumb from "@/modules/common/components/breadcrumb/events";
import Campaign from "@/modules/common/components/campaings";
import EmptyContent from "@/modules/common/components/empty-content";
import SupportSystem from "@/modules/common/components/support-system";
import { Locale } from "@/modules/i18n/i18n.config";
import { getDictionary } from "@/modules/i18n/lib/dictionary";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { Events, campaigns, impactStatements } = await getDictionary(
    params.lang
  );
  return (
    <>
      <BreadCrumb Events={Events} />
      <EmptyContent text={Events.emptyMessage} />
      <Campaign campaigns={campaigns} />
      <SupportSystem impactStatements={impactStatements} bg="!tw-bg-white" />
    </>
  );
}
