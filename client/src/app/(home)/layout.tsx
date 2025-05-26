import React from "react";
import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import FooterSection from "./FooterSection";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <main
        className={`flex flex-col h-full w-full min-h-[1100px]`}
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        {children}
      </main>
      <FooterSection />
    </div>
  );
};

export default HomeLayout;
