import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export type TrialFormData = {
  fullName: string;
  phone: string;
  email?: string;
  track: string;
  oneOnOne: boolean;
  mode: "online" | "offline";
  preferredSlot?: string; // human readable time slot
  goal?: string;
  city?: string;
};

interface TrialContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  lastSubmission?: TrialFormData;
  setLastSubmission: (d?: TrialFormData) => void;
}

const TrialContext = createContext<TrialContextValue | undefined>(undefined);

export const TrialProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<TrialFormData | undefined>(undefined);
  const navigate = useNavigate();

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, open, close, lastSubmission, setLastSubmission }), [isOpen, lastSubmission]);

  return (
    <TrialContext.Provider value={value}>
      {children}
    </TrialContext.Provider>
  );
};

export const useTrial = () => {
  const ctx = useContext(TrialContext);
  if (!ctx) throw new Error("useTrial must be used within TrialProvider");
  return ctx;
};
