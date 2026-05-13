import React from "react";

export interface PageTitleProps {
  /**  page heading text */
  title: string;
}

/**
 * Top-of-page heading.
 *
 * @example
 * <PageTitle title="Admin › System Features" />
 */
export function PageTitle({ title }: PageTitleProps) {
  return <div className="text-lg font-medium">{title}</div>;
}
