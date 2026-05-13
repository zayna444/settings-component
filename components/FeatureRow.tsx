import React from "react";
import { ToggleSwitch } from "./ToggleSwitch";

export interface FeatureRowProps {
  
  label: string;

  enabled: boolean;
 
  onToggle: () => void;
}

/**
 *  single labelled toggle row inside a FeatureCard.
 *
 * @example
 * <FeatureRow
 *   label="Dark Mode"
 *   enabled={isDarkMode}
 *   onToggle={() => setIsDarkMode(v => !v)}
 * />
 */
export function FeatureRow({ label, enabled, onToggle }: FeatureRowProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-800">{label}</span>
      <ToggleSwitch
        enabled={enabled}
        onToggle={onToggle}
        ariaLabel={`Toggle ${label}`}
      />
    </div>
  );
}
