# settings-component

Shared React UI components for OMNIsoft projects — replicates the **Admin › System Features** toggle page exactly.

Built with **React + TypeScript + Tailwind CSS**.

---

## Components

| Component | Description |
|---|---|
| `ToggleSwitch` | Green/red pill toggle button |
| `FeaturesPage` | Full features page with internal state |
| `FeaturesPageControlled` | Full features page — you own the state |

---

## Usage

### 1. Copy the `components/` folder into your project

```
your-project/
  src/
    components/
      settings/          ← paste here
        index.ts
        ToggleSwitch.tsx
        FeaturesPage.tsx
```

### 2. Use `FeaturesPage` (self-managed state)

Mirrors the original OMNImine Features.tsx behaviour — state is handled internally.

```tsx
import { FeaturesPage } from "@/components/settings";

export default function AdminFeatures() {
  return (
    <FeaturesPage
      defaultFeatures={[
        { key: "manualTicket", label: "Create Manual Ticket", enabled: true },
        { key: "editTicketDate", label: "Edit In / Out Date Edited Ticket", enabled: false },
        { key: "reprintTicket", label: "Reprint Ticket", enabled: false },
      ]}
      onChange={(updated) => console.log("features changed:", updated)}
    />
  );
}
```

### 3. Use `FeaturesPageControlled` (you own state)

Use this when you need to drive toggles from external state (e.g. API-loaded config).

```tsx
import { useState } from "react";
import { FeaturesPageControlled, Feature } from "@/components/settings";

const INITIAL: Feature[] = [
  { key: "manualTicket", label: "Create Manual Ticket", enabled: true },
  { key: "reprintTicket", label: "Reprint Ticket", enabled: false },
];

export default function AdminFeatures() {
  const [features, setFeatures] = useState(INITIAL);

  const handleToggle = (key: string) =>
    setFeatures((prev) =>
      prev.map((f) => (f.key === key ? { ...f, enabled: !f.enabled } : f))
    );

  return (
    <FeaturesPageControlled
      features={features}
      onToggle={handleToggle}
      title="Admin › System Features"
    />
  );
}
```

### 4. Use `ToggleSwitch` standalone

```tsx
import { ToggleSwitch } from "@/components/settings";

<ToggleSwitch enabled={isOn} onToggle={() => setIsOn(!isOn)} />
```

---

## Requirements

- React ≥ 18
- Tailwind CSS (configured in your project)
