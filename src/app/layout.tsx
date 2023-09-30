import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/bootstrap.min.css";
import "@/styles/responsive.css";
import "@/styles/animate.css";
import Providers from "@/modules/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bootstrap 5 with Next js 13",
  description: "how to use bootstrap 5 in next js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
