import { useState } from "react";
import { PageTitle } from "./PageTitle";
import { FeatureCard } from "./FeatureCard";
import { FeatureRow } from "./FeatureRow";

export interface Feature {
  /** Unique identifier for the feature */
  key: string;
  /** Human-readable label displayed next to the toggle */
  label: string;
  /** Initial enabled state */
  enabled: boolean;
}

export interface FeaturesPageProps {
  title?: string;
  defaultFeatures: Feature[];
  onChange?: (features: Feature[]) => void;
}

/** Self-managed features page */
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
      <PageTitle title={title} />
      <FeatureCard>
        {features.map((feature) => (
          <FeatureRow
            key={feature.key}
            label={feature.label}
            enabled={feature.enabled}
            onToggle={() => handleToggle(feature.key)}
          />
        ))}
      </FeatureCard>
    </div>
  );
}

// ─── Controlled variant ──────────────────────────────────────────────────────

export interface FeaturesPageControlledProps {
  title?: string;
  features: Feature[];
  onToggle: (key: string) => void;
}

/** Controlled features page — you own the state */
export function FeaturesPageControlled({
  title = "Admin › System Features",
  features,
  onToggle,
}: FeaturesPageControlledProps) {
  return (
    <div className="p-1">
      <PageTitle title={title} />
      <FeatureCard>
        {features.map((feature) => (
          <FeatureRow
            key={feature.key}
            label={feature.label}
            enabled={feature.enabled}
            onToggle={() => onToggle(feature.key)}
          />
        ))}
      </FeatureCard>
    </div>
  );
}
