"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.js");
      AOS.init({
        duration: 600,
      });
      AOS.refresh();
    }
  }, []);
  return <>{children} </>;
}
