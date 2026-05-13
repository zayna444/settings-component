import React from "react";

export interface ToggleSwitchProps {
  /* if the toggle is in the ON state */
  enabled: boolean;
  /* called when the user clicks the toggle */
  onToggle: () => void;
  /* accessible label for screen readers */
  ariaLabel?: string;
}

/**
  green n red pill toggle switch 
 **/
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
