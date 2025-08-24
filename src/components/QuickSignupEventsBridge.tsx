import { useEffect } from "react";
import { useQuickSignup } from "@/context/QuickSignupContext";

// Attach a window event listener so button clicks from anywhere can open the modal without prop drilling
export const QuickSignupEventsBridge = () => {
  const { open } = useQuickSignup();
  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ courseTitle?: string }>;
      open({ courseTitle: ce.detail?.courseTitle });
    };
    window.addEventListener("open-quick-signup", handler as EventListener);
    return () => window.removeEventListener("open-quick-signup", handler as EventListener);
  }, [open]);
  return null;
};
