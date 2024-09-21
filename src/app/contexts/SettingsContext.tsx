"use client";

import { createContext, useEffect, useState, ReactNode } from "react";

interface Settings {
  direction: "ltr" | "rtl";
}

interface SettingsContextType {
  settings: Settings;
  updateSettings: (arg: Settings) => void;
}

interface SettingsProviderProps {
  children: ReactNode;
}

// Initial settings
const initialSettings: Settings = {
  direction: "ltr",
};

export const SettingsContext = createContext<SettingsContextType>({
  settings: initialSettings,
  updateSettings: () => { },
});

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = useState<Settings>(initialSettings);

  const updateSettings = (updatedSetting: Settings) => {
    setSettings(updatedSetting);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "bazaar_settings",
        JSON.stringify(updatedSetting)
      );
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getItem = window.localStorage.getItem("bazaar_settings");
      if (getItem) setSettings(JSON.parse(getItem));
    }
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
