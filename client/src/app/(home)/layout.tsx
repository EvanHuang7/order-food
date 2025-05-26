import React from "react";
import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import FooterSection from "./FooterSection";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main
        className="flex-grow w-full"
        style={{ paddingTop: `${NAVBAR_HEIGHT}px`, paddingBottom: `100px` }}
      >
        {children}
      </main>
      <FooterSection />
    </div>
  );
};

export default HomeLayout;
