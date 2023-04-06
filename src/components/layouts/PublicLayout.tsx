import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
