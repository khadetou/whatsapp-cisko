import Footer from "@/modules/layout/templates/footer";
import Header from "@/modules/layout/templates/header";
import { Locale } from "@/modules/i18n/i18n.config";
import { getDictionary } from "@/modules/i18n/lib/dictionary";

export const metadata = {
  title:
    "WhatsApp Cisko - Connecter les communautés, autonomiser les vies | Technologie au service du bien social",
  description:
    "Rejoignez WhatsApp Cisko pour connecter les communautés et avoir un impact positif sur les vies grâce à la technologie. Autonomisation des vies et création de bien social.",
};
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <Header lang={params} dictionary={dictionary} />
      {children}

      <Footer footer={dictionary.footer} />
    </>
  );
}
