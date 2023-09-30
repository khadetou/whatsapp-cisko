"use client";
import { useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.js");
    }
  }, []);
  return <>{children} </>;
}
