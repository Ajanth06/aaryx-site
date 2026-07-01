export type IconName =
  | "analytics"
  | "approval"
  | "factory"
  | "globe"
  | "network"
  | "package"
  | "shield"
  | "truck";

const iconPaths: Record<IconName, string> = {
  analytics: "M4 19V5M4 19H20M8 16V11M12 16V7M16 16V10M20 16V4",
  approval: "M4 12L9 17L20 6M5 20H19",
  factory: "M4 20V9L9 12V9L14 12V8L20 12V20H4ZM7 16H9M12 16H14M17 16H18",
  globe:
    "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M12 21C14 18.5 15 15.5 15 12C15 8.5 14 5.5 12 3M12 21C10 18.5 9 15.5 9 12C9 8.5 10 5.5 12 3M4 9H20M4 15H20",
  network:
    "M6 8A2 2 0 1 0 6 4A2 2 0 0 0 6 8ZM18 8A2 2 0 1 0 18 4A2 2 0 0 0 18 8ZM12 20A2 2 0 1 0 12 16A2 2 0 0 0 12 20ZM8 7L10.5 16M16 7L13.5 16M8 6H16",
  package: "M4 8L12 4L20 8L12 12L4 8ZM4 8V16L12 20M20 8V16L12 20M12 12V20",
  shield: "M12 21C8 19 5 15.5 5 10V5L12 3L19 5V10C19 15.5 16 19 12 21ZM9 12L11 14L15 9",
  truck:
    "M3 7H14V16H3V7ZM14 10H18L21 13V16H14V10ZM7 19A2 2 0 1 0 7 15A2 2 0 0 0 7 19ZM18 19A2 2 0 1 0 18 15A2 2 0 0 0 18 19Z",
};

export function ServiceIcon({ name }: { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}

export function isIconName(value: string): value is IconName {
  return value in iconPaths;
}
