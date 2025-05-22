import { usePathname } from "next/navigation";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import {
  Heart,
  Menu,
  Settings,
  NotepadText,
  NotepadTextDashed,
  Wallet,
  CircleDollarSign,
  Store,
  X,
} from "lucide-react";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

const AppSidebar = ({ userType }: AppSidebarProps) => {
  const pathname = usePathname();
  const { toggleSidebar, open } = useSidebar();
  const navLinksMap = {
    customer: [
      { icon: NotepadText, label: "Orders", href: "/customer/orders" },
      { icon: Heart, label: "Favorites", href: "/customer/favorites" },
      { icon: Wallet, label: "Payments", href: "/customer/payments" },
      { icon: Settings, label: "Settings", href: "/customer/settings" },
    ],
    restaurant: [
      { icon: NotepadText, label: "Orders", href: "/restaurant/orders" },
      {
        icon: CircleDollarSign,
        label: "Earnings",
        href: "/restaurant/earnings",
      },
      {
        icon: Store,
        label: "Manage Restaurant",
        href: "/restaurant/manage-restaurant",
      },
      { icon: Settings, label: "Settings", href: "/restaurant/settings" },
    ],
    driver: [
      {
        icon: NotepadTextDashed,
        label: "Available Orders",
        href: "/driver/available-orders",
      },
      { icon: NotepadText, label: "My Orders", href: "/driver/orders" },
      { icon: CircleDollarSign, label: "Earnings", href: "/driver/earnings" },
      { icon: Settings, label: "Settings", href: "/driver/settings" },
    ],
  };

  const navLinks = navLinksMap[userType];

  return (
    <Sidebar
      collapsible="icon"
      className="fixed left-0 bg-white shadow-lg"
      style={{
        top: `${NAVBAR_HEIGHT}px`,
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div
              className={cn(
                "flex min-h-[56px] w-full items-center pt-3 mb-3",
                open ? "justify-between px-6" : "justify-center"
              )}
            >
              {open ? (
                <>
                  <h1 className="text-xl font-bold text-gray-800">
                    {userType === "customer"
                      ? "Customer View"
                      : userType === "restaurant"
                      ? "Restaurant View"
                      : "Driver View"}
                  </h1>
                  <button
                    className="hover:bg-gray-100 p-2 rounded-md"
                    onClick={() => toggleSidebar()}
                  >
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                </>
              ) : (
                <button
                  className="hover:bg-gray-100 p-2 rounded-md"
                  onClick={() => toggleSidebar()}
                >
                  <Menu className="h-6 w-6 text-gray-600" />
                </button>
              )}
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "flex items-center px-7 py-7",
                    isActive
                      ? "bg-gray-100"
                      : "text-gray-600 hover:bg-gray-100",
                    open ? "text-blue-600" : "ml-[5px]"
                  )}
                >
                  <Link href={link.href} className="w-full" scroll={false}>
                    <div className="flex items-center gap-3">
                      <link.icon
                        className={`h-5 w-5 flex-shrink-0 ${
                          isActive ? "text-blue-600" : "text-gray-600"
                        }`}
                      />
                      <span
                        className={`font-medium ${
                          isActive ? "text-blue-600" : "text-gray-600"
                        }`}
                      >
                        {link.label}
                      </span>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
