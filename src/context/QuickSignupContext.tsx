import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

export type QuickSignupPayload = {
  courseTitle?: string;
};

interface QuickSignupContextValue {
  isOpen: boolean;
  open: (payload?: QuickSignupPayload) => void;
  close: () => void;
  preset?: QuickSignupPayload;
}

const QuickSignupContext = createContext<QuickSignupContextValue | undefined>(undefined);

export const QuickSignupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState<QuickSignupPayload | undefined>(undefined);

  const open = useCallback((payload?: QuickSignupPayload) => {
    setPreset(payload);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, open, close, preset }), [isOpen, open, close, preset]);

  return (
    <QuickSignupContext.Provider value={value}>{children}</QuickSignupContext.Provider>
  );
};

export const useQuickSignup = () => {
  const ctx = useContext(QuickSignupContext);
  if (!ctx) throw new Error("useQuickSignup must be used within QuickSignupProvider");
  return ctx;
};
