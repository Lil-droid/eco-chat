interface EcoChatLogoProps {
  className?: string;
  markSize?: number;
}

/** The EcoChat brand mark: a leaf-formed speech bubble, plus wordmark. */
export function EcoChatLogo({ className = "", markSize = 36 }: EcoChatLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="12" fill="#12211C" />
        <path
          d="M11 24c0-7.2 5.8-13 13-13h5v5c0 7.2-5.8 13-13 13h-5v-5Z"
          fill="url(#ecochat-leaf-gradient)"
        />
        <path
          d="M13.5 26.5 24 16"
          stroke="#0D1512"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.35"
        />
        <defs>
          <linearGradient id="ecochat-leaf-gradient" x1="11" y1="24" x2="29" y2="11" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7CB894" />
            <stop offset="1" stopColor="#C7ED94" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight text-ink-950">
        EcoChat
      </span>
    </div>
  );
}
