type Props = { name: string; className?: string };

export function Icon({ name, className = "h-8 w-8" }: Props) {
  const common = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 32 32",
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "diagnosis":
      return (
        <svg {...common}>
          <rect x="4" y="7" width="24" height="14" rx="2" />
          <path d="M8 25h16M14 21v4M18 21v4" />
          <path d="M9 14l3-3 3 4 3-5 3 3 2-1" />
        </svg>
      );
    case "brakes":
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="10" />
          <circle cx="16" cy="16" r="4" />
          <path d="M16 6v4M16 22v4M6 16h4M22 16h4M9 9l2.8 2.8M20.2 20.2L23 23M9 23l2.8-2.8M20.2 11.8L23 9" />
        </svg>
      );
    case "oil":
      return (
        <svg {...common}>
          <path d="M22 8h4M24 8v6c0 2-2 4-4 4" />
          <path d="M6 12c0-3 3-6 7-6h3l4 5v13H6V12Z" />
          <path d="M10 24c0-2 1-3 3-3M14 18c1.6-1.4 1.6-3 0-4" />
        </svg>
      );
    case "tire":
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="4" />
          <path d="M16 5v6M16 21v6M5 16h6M21 16h6M8 8l4 4M20 20l4 4M8 24l4-4M20 12l4-4" />
        </svg>
      );
    case "ecu":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="18" height="18" rx="2" />
          <path d="M11 11h10v10H11z" />
          <path d="M7 12h-3M7 16h-3M7 20h-3M25 12h3M25 16h3M25 20h3M12 7v-3M16 7v-3M20 7v-3M12 25v3M16 25v3M20 25v3" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M10 16l4 4 8-10" />
          <circle cx="16" cy="16" r="12" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M6 16h20M18 8l8 8-8 8" />
        </svg>
      );
    case "play":
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="12" />
          <path d="M13 11l8 5-8 5z" fill="currentColor" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 22.5c-2 2-7-1-11-5s-7-9-5-11l2-2 4 4-2 2c0 2 4 6 6 6l2-2 4 4z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M16 28c-6-7-10-12-10-16a10 10 0 0 1 20 0c0 4-4 9-10 16Z" />
          <circle cx="16" cy="12" r="3" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="12" />
          <path d="M16 9v7l5 3" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M16 4l3.7 7.6 8.3 1.2-6 5.9 1.4 8.3L16 23l-7.4 4 1.4-8.3-6-5.9 8.3-1.2L16 4z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M16 4l10 4v6c0 7-5 12-10 14-5-2-10-7-10-14V8l10-4z" />
          <path d="M11 16l4 4 6-8" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M22 4a5 5 0 0 0-5 7l-9 9a2.8 2.8 0 0 0 4 4l9-9a5 5 0 0 0 7-5l-3 3-3-1-1-3 3-5z" />
        </svg>
      );
    default:
      return null;
  }
}
