import Footer from "@/modules/layout/templates/footer";
import Header from "@/modules/layout/templates/header";

export const metadata = {
  title: "SEO Title",
  description: "SEO Title",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
