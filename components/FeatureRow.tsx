import React from "react";
import { ToggleSwitch } from "./ToggleSwitch";

export interface FeatureRowProps {
  /** Display label shown to the left of the toggle */
  label: string;
  /** Current enabled state */
  enabled: boolean;
  /** Called when the toggle is clicked */
  onToggle: () => void;
}

/** A single labelled toggle row inside a FeatureCard */
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
