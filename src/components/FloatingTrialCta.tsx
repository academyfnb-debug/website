import React from "react";
import { Button } from "@/components/ui/button";
import { useTrial } from "@/context/TrialContext";
import { Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";

export const FloatingTrialCta: React.FC = () => {
  const { open } = useTrial();
  const { pathname } = useLocation();

  // Hide CTA on trial-related pages
  const hiddenOnPaths = ["/trial-1on1", "/trial-1on1/confirm", "/trial-1on1/thank-you"];
  if (hiddenOnPaths.some((p) => pathname.startsWith(p))) return null;

  return (
    <>
      {/* Mobile: sticky full-width bottom bar with safe-area padding */}
      <div className="fixed inset-x-0 bottom-0 z-50 block md:hidden">
        <div
          className="container px-4"
          style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.5rem)", paddingTop: "0.5rem" }}
        >
          <Button
            variant="neon"
            size="lg"
            onClick={open}
            className="w-full shadow-glow"
            aria-label="Mở đăng ký học thử miễn phí"
          >
            <Sparkles className="mr-2 h-4 w-4" /> Đăng ký học thử miễn phí
          </Button>
        </div>
      </div>

      {/* Desktop: floating button bottom-right */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <Button variant="neon" size="lg" onClick={open} className="shadow-glow" aria-label="Mở đăng ký học thử miễn phí">
          <Sparkles className="mr-2 h-4 w-4" /> Đăng ký học thử miễn phí
        </Button>
      </div>
    </>
  );
};
