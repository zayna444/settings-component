import React from "react";

export interface FeatureCardProps {
  /** Section heading label */
  heading?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * that white rounded card used to group feature toggle rows.
 *
 * @example
 * <FeatureCard heading="My Features">
 *   <FeatureRow label="Dark Mode" enabled={true} onToggle={() => {}} />
 * </FeatureCard>
 */
export function FeatureCard({
  heading = (
    <>
      Turn Features <span className="font-bold">ON / OFF</span>:
    </>
  ),
  children,
}: FeatureCardProps) {
  return (
    <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm p-6 max-w-3xl">
      <h2 className="text-sm font-semibold text-gray-700 mb-4">{heading}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
