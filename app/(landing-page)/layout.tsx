import "./styles/styles.scss";
import { Inter } from "next/font/google";
import { Header, Footer } from "./components";

const inter = Inter({ subsets: ["latin"] });

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
