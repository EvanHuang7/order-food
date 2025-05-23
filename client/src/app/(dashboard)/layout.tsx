"use client";

import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/AppSidebar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import React, { useEffect, useState } from "react";
import { useGetAuthUserQuery } from "@/state/api";
import { usePathname, useRouter } from "next/navigation";
import Loading from "@/components/Loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authUser) {
      const userRole = authUser.userRole?.toLowerCase();

      // Redirect to correct dashboard if user is on the wrong one
      const redirects: Record<string, string> = {
        customer: "/customer/orders",
        restaurant: "/restaurant/orders",
        driver: "/driver/orders",
      };

      const routeMismatch =
        (userRole === "customer" && !pathname.startsWith("/customer")) ||
        (userRole === "restaurant" && !pathname.startsWith("/restaurant")) ||
        (userRole === "driver" && !pathname.startsWith("/driver"));

      if (routeMismatch && redirects[userRole]) {
        router.push(redirects[userRole], { scroll: false });
      } else {
        setIsLoading(false);
      }
    }
  }, [authUser, router, pathname]);

  if (authLoading || isLoading) return <Loading />;
  if (!authUser?.userRole) return null;

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-primary-100">
        <Navbar />
        <div style={{ marginTop: `${NAVBAR_HEIGHT}px` }}>
          <main className="flex w-full">
            <Sidebar userType={authUser.userRole.toLowerCase()} />
            <div className="flex-grow w-full max-w-full overflow-x-hidden">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
