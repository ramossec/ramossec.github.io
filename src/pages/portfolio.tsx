import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header"; // Adicione esta linha
import Footer from "@parts/footer";

const PortfolioPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen ">
        <h1>Portfolio page</h1>
      </main>
      <Footer/>
    </>
  );
};

export default PortfolioPage;

export const Head: HeadFC = () => <head>
<title>RamosSec - Portfolio</title>
<meta name="google-adsense-account" content="ca-pub-6481815227988488"></meta>
</head>
