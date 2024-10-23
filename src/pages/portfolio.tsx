import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header"; // Adicione esta linha

const PortfolioPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen ">
        <h1>Portfolio page</h1>
      </main>
    </>
  );
};

export default PortfolioPage;

export const Head: HeadFC = () => <title>Ramos Sec - Portfólio</title>;
