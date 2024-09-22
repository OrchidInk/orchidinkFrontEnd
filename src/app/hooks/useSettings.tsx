import { useContext } from "react";
import { SettingsContext } from "@/contexts/SettingsContext"; // Adjust path accordingly

export const useSettings = () => {
  return useContext(SettingsContext);
};
