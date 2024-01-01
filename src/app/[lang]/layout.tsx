import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/bootstrap.min.css";
import "@/styles/responsive.css";
import "@/styles/animate.css";
// import "@/styles/owl.carousel.min.css";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Providers from "@/modules/providers";
import type { Metadata } from "next";
import { Mada } from "next/font/google";
import { Locale, i18n } from "@/modules/i18n/i18n.config";
import { Toaster } from "react-hot-toast";

const mada = Mada({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Watsap Cisko - Connecter les communautés, autonomiser les vies | Technologie au service du bien social",
  description:
    "Rejoignez Watsap Cisko pour connecter les communautés et avoir un impact positif sur les vies grâce à la technologie. Autonomisation des vies et création de bien social.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={mada.className}>
        <Providers>
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
