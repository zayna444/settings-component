import { useState } from "react";
import { ToggleSwitch } from "./ToggleSwitch";

export interface Feature {
  /** Unique identifier for the feature */
  key: string;
  /** Human-readable label displayed next to the toggle */
  label: string;
  /** Initial enabled state */
  enabled: boolean;
}

export interface FeaturesPageProps {
  /**
   * Breadcrumb/page title shown at the top.
   * @default "Admin › System Features"
   */
  title?: string;
  /**
   * List of features to render. Each item controls its own toggle state
   * internally. If you need controlled state, use `FeaturesPageControlled`.
   */
  defaultFeatures: Feature[];
  /**
   * Called whenever a toggle changes, with the updated features array.
   */
  onChange?: (features: Feature[]) => void;
}

/**
 * Full features page matching the OMNImine Admin › System Features UI.
 * Manages its own toggle state internally.
 *
 * @example
 * ```tsx
 * <FeaturesPage
 *   defaultFeatures={[
 *     { key: "manualTicket", label: "Create Manual Ticket", enabled: true },
 *     { key: "reprintTicket", label: "Reprint Ticket", enabled: false },
 *   ]}
 *   onChange={(updated) => console.log(updated)}
 * />
 * ```
 */
export function FeaturesPage({
  title = "Admin › System Features",
  defaultFeatures,
  onChange,
}: FeaturesPageProps) {
  const [features, setFeatures] = useState<Feature[]>(defaultFeatures);

  const handleToggle = (key: string) => {
    setFeatures((prev) => {
      const updated = prev.map((f) =>
        f.key === key ? { ...f, enabled: !f.enabled } : f
      );
      onChange?.(updated);
      return updated;
    });
  };

  return (
    <div className="p-1">
      {/* Breadcrumb / page title */}
      <div className="text-lg font-medium">{title}</div>

      {/* Card */}
      <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm p-6 max-w-3xl">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Turn Features <span className="font-bold">ON / OFF</span>:
        </h2>

        <div className="space-y-4">
          {features.map((feature) => (
            <div
              key={feature.key}
              className="flex items-center justify-between"
            >
              <span className="text-sm text-gray-800">{feature.label}</span>

              <ToggleSwitch
                enabled={feature.enabled}
                onToggle={() => handleToggle(feature.key)}
                ariaLabel={`Toggle ${feature.label}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Controlled variant ──────────────────────────────────────────────────────

export interface FeaturesPageControlledProps {
  title?: string;
  /** Fully controlled features array (you manage state) */
  features: Feature[];
  /** Called with the key of the feature that was toggled */
  onToggle: (key: string) => void;
}

/**
 * Controlled version of FeaturesPage — you own the state.
 *
 * @example
 * ```tsx
 * const [features, setFeatures] = useState(initialFeatures);
 * const handleToggle = (key: string) =>
 *   setFeatures(prev => prev.map(f => f.key === key ? { ...f, enabled: !f.enabled } : f));
 *
 * <FeaturesPageControlled features={features} onToggle={handleToggle} />
 * ```
 */
export function FeaturesPageControlled({
  title = "Admin › System Features",
  features,
  onToggle,
}: FeaturesPageControlledProps) {
  return (
    <div className="p-1">
      <div className="text-lg font-medium">{title}</div>

      <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm p-6 max-w-3xl">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Turn Features <span className="font-bold">ON / OFF</span>:
        </h2>

        <div className="space-y-4">
          {features.map((feature) => (
            <div
              key={feature.key}
              className="flex items-center justify-between"
            >
              <span className="text-sm text-gray-800">{feature.label}</span>

              <ToggleSwitch
                enabled={feature.enabled}
                onToggle={() => onToggle(feature.key)}
                ariaLabel={`Toggle ${feature.label}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
