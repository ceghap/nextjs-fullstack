import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div className="format w-full p-4 md:ml-64">{children}</div>
      </div>
    </div>
  );
};

export default PrivateLayout;
