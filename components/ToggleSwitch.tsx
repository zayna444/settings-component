import React from "react";

export interface ToggleSwitchProps {
  /** Whether the toggle is in the ON state */
  enabled: boolean;
  /** Called when the user clicks the toggle */
  onToggle: () => void;
  /** Accessible label for screen readers */
  ariaLabel?: string;
}

/**
 * A green/red pill toggle switch that matches the OMNImine Features page style.
 */
export function ToggleSwitch({ enabled, onToggle, ariaLabel }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-label={ariaLabel}
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
        enabled ? "bg-green-600" : "bg-red-500"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}
