"use client";

import { setUtahHeaderSettings } from "@utahdts/utah-design-system-header";
import "@utahdts/utah-design-system-header/css";
import { useEffect, useRef } from "react";

export default function Header() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !window) return;

    setUtahHeaderSettings({
      title: "Utah Address Verification",
      domLocationTarget: {
        element: ref.current,
      },
    });
  }, []);

  return <header ref={ref}></header>;
}
