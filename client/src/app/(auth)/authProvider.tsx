"use client";

import React, { useEffect } from "react";
import { Amplify } from "aws-amplify";
import {
  Authenticator,
  Heading,
  Radio,
  RadioGroupField,
  useAuthenticator,
  View,
  Image,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useRouter, usePathname } from "next/navigation";
import Loading from "@/components/Loading";

// https://docs.amplify.aws/gen1/javascript/tools/libraries/configure-categories/
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID!,
      userPoolClientId:
        process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID!,
    },
  },
});

const components = {
  Header() {
    return (
      <View className="mt-4 mb-7 flex items-center space-x-4">
        {/* App Icon */}
        <Image
          src="/order-food-logo.svg"
          alt="OrderFood Logo"
          width={48}
          height={48}
          className="w-12 h-12"
        />

        {/* Title + Subtitle */}
        <div>
          <Heading level={3} className="!text-2xl !font-bold">
            Order
            <span className="text-secondary-500 font-light hover:!text-primary-300">
              Food
            </span>
          </Heading>
          <p className="text-muted-foreground mt-1">
            <span className="font-bold">Welcome!</span> Please sign in to
            continue
          </p>
        </div>
      </View>
    );
  },

  SignIn: {
    Footer() {
      const { toSignUp } = useAuthenticator();
      return (
        <View className="text-center mt-4">
          <p className="text-muted-foreground">
            Don&apos;t have an account?{" "}
            <button
              onClick={toSignUp}
              className="text-primary hover:underline bg-transparent border-none p-0"
            >
              Sign up here
            </button>
          </p>
        </View>
      );
    },
  },
  SignUp: {
    FormFields() {
      const { validationErrors } = useAuthenticator();

      return (
        <>
          <Authenticator.SignUp.FormFields />
          <RadioGroupField
            legend="Role"
            name="custom:role"
            errorMessage={validationErrors?.["custom:role"]}
            hasError={!!validationErrors?.["custom:role"]}
            isRequired
          >
            <Radio value="customer">Customer</Radio>
            <Radio value="restaurant">Restaurant</Radio>
            <Radio value="driver">Driver</Radio>
          </RadioGroupField>
        </>
      );
    },

    Footer() {
      const { toSignIn } = useAuthenticator();
      return (
        <View className="text-center mt-4">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <button
              onClick={toSignIn}
              className="text-primary hover:underline bg-transparent border-none p-0"
            >
              Sign in
            </button>
          </p>
        </View>
      );
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: "Enter your email",
      label: "Email",
      isRequired: true,
    },
    password: {
      placeholder: "Enter your password",
      label: "Password",
      isRequired: true,
    },
  },
  signUp: {
    username: {
      order: 1,
      placeholder: "Choose a username",
      label: "Username",
      isRequired: true,
    },
    email: {
      order: 2,
      placeholder: "Enter your email address",
      label: "Email",
      isRequired: true,
    },
    password: {
      order: 3,
      placeholder: "Create a password",
      label: "Password",
      isRequired: true,
    },
    confirm_password: {
      order: 4,
      placeholder: "Confirm your password",
      label: "Confirm Password",
      isRequired: true,
    },
  },
};

const Auth = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthenticator((context) => [context.user]);
  const router = useRouter();
  const pathname = usePathname();

  const isAuthPage = pathname.match(/^\/(signin|signup)$/);
  const isDashboardPage =
    pathname.startsWith("/customer") ||
    pathname.startsWith("/restaurant") ||
    pathname.startsWith("/driver");

  // Auth pages with authenticated user case
  // Redirect authenticated users to home if they are in Auth pages
  useEffect(() => {
    if (user && isAuthPage) {
      router.push("/");
    }
  }, [user, isAuthPage, router]);

  // Public home pages case, no authentication required
  if (!isAuthPage && !isDashboardPage) {
    return <>{children}</>;
  }

  // Dashboard pages with authenticated user case
  if (user && isDashboardPage) {
    return <>{children}</>;
  }

  // Auth pages with no authenticated user and
  // Dashboard pages with no authenticated user cases
  return (
    <div className="h-full">
      {/* Authenticator component only displayed when no logged in user */}
      {!user ? (
        <Authenticator
          initialState={pathname.includes("signup") ? "signUp" : "signIn"}
          components={components}
          formFields={formFields}
        >
          {() => <>{children}</>}
        </Authenticator>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Auth;
