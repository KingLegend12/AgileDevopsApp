import React from "react";
import { Footer } from "./partial/Footer.comp";
import { Header } from "./partial/Header.comp";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <div className="header">
        <Header />
      </div>

      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
