import DonateNow from "@/modules/campaign/components/donate-now";
import BreadCrumb from "@/modules/common/components/breadcrumb/donate";
import { Locale } from "@/modules/i18n/i18n.config";
import { getDictionary } from "@/modules/i18n/lib/dictionary";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { donate } = await getDictionary(params.lang);
  return (
    <>
      <BreadCrumb Donate={donate.Donate} />
      <DonateNow donateNow={donate.donateNow} />
    </>
  );
}
