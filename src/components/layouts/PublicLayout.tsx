import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="min-h- format p-4">{children}</div>
      <Footer />
    </div>
  );
};

export default PrivateLayout;
