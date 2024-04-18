import "./styles/styles.scss";
import { Header, Footer } from "@/components/home/common";

export const metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app">
      <Header />
      <main className=""> {children}</main>
      <Footer />
    </div>
  );
}
