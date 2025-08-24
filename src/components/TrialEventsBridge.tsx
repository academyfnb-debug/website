import React, { useEffect } from "react";
import { useTrial } from "@/context/TrialContext";

export const TrialEventsBridge: React.FC = () => {
  const { open } = useTrial();

  useEffect(() => {
    const handler = () => open();
    window.addEventListener("open-trial-modal", handler);
    return () => window.removeEventListener("open-trial-modal", handler);
  }, [open]);

  return null;
};
