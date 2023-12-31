import BreadCrumb from "@/modules/common/components/breadcrumb/contact-us";
import ContactDetails from "@/modules/contact/components/contact-details";
import ContactUs from "@/modules/contact/components/contact-us";
import { Locale } from "@/modules/i18n/i18n.config";
import { getDictionary } from "@/modules/i18n/lib/dictionary";

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { Contact } = await getDictionary(params.lang);
  return (
    <>
      <BreadCrumb Contact={Contact} />
      <ContactUs contactUs={Contact.contactUs} />
      <ContactDetails contactDetails={Contact.contactUs.contactDetails} />
    </>
  );
}
