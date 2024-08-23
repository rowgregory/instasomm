"use client";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const PageWrapper = ({ children }: any) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mb-28">{children}</main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
