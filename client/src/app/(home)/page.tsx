import React, { Suspense } from "react";
import Home from "./Home";
import Loading from "@/components/Loading";

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  );
}
