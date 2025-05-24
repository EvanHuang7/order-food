"use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useGetAuthUserQuery } from "@/state/api";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "aws-amplify/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SidebarTrigger } from "./ui/sidebar";
import ShoppingCartSheet from "./ShoppingCartSheet";
import NotificationSetting from "./NotificationSetting";

const Navbar = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const showCustomerInteraction =
    !!authUser && authUser.userRole === "customer";
  const router = useRouter();
  const pathname = usePathname();

  const isDashboardPage =
    pathname.startsWith("/customer") ||
    pathname.startsWith("/restaurant") ||
    pathname.startsWith("/driver");

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/";
  };

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary-700 text-white">
        {/* Left part */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Side bar button in small screen */}
          {isDashboardPage && (
            <div className="md:hidden">
              <SidebarTrigger />
            </div>
          )}
          {/* Logo and app name */}
          <Link
            href="/"
            className="cursor-pointer hover:!text-primary-300"
            scroll={false}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/order-food-logo.svg"
                alt="OrderFood Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-xl font-bold">
                Order
                <span className="text-secondary-500 font-light hover:!text-primary-300">
                  Food
                </span>
              </div>
            </div>
          </Link>
        </div>
        {/* Right part */}
        <div className="flex items-center gap-5">
          {/* Buttons when logged in user */}
          {authUser ? (
            <>
              {/* Notification setting button for logged in customer */}
              {showCustomerInteraction && <NotificationSetting />}
              {/* Shopping cart button for logged in customer */}
              {showCustomerInteraction && <ShoppingCartSheet />}

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
                  <Avatar>
                    <AvatarImage src={authUser.userInfo?.image} />
                    <AvatarFallback className="bg-primary-600">
                      {authUser.userRole?.[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-primary-200 hidden md:block">
                    {authUser.userInfo?.name}
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-primary-700">
                  <DropdownMenuItem
                    className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100 font-bold"
                    onClick={() =>
                      router.push(
                        authUser.userRole?.toLowerCase() === "customer"
                          ? "/customer/settings"
                          : authUser.userRole?.toLowerCase() === "restaurant"
                          ? "/restaurant/settings"
                          : "/driver/settings",
                        { scroll: false }
                      )
                    }
                  >
                    Go to Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-primary-200" />
                  <DropdownMenuItem
                    className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100"
                    onClick={() =>
                      router.push(
                        `/${authUser.userRole?.toLowerCase()}/settings`,
                        { scroll: false }
                      )
                    }
                  >
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer hover:!bg-primary-700 hover:!text-primary-100"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              {/* Buttons when no logged in user */}
              <Link href="/signin">
                <Button
                  variant="outline"
                  className="text-white border-white bg-transparent hover:bg-white hover:text-primary-700 rounded-lg"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  variant="secondary"
                  className="text-white bg-secondary-600 hover:bg-white hover:text-primary-700 rounded-lg"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
