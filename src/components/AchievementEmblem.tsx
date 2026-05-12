type Props = {
  size?: number;
  className?: string;
};

/**
 * 「受講生実績 月商100万円達成者 続出」エンブレム
 * 王冠＋月桂樹＋ゴールド文字の高級感あるシール風デザイン
 */
export default function AchievementEmblem({ size = 130, className = "" }: Props) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="emblemBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#fafbfd" />
          </linearGradient>
          <linearGradient id="emblemGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3e6c1" />
            <stop offset="50%" stopColor="#c9a24b" />
            <stop offset="100%" stopColor="#a37e2a" />
          </linearGradient>
        </defs>

        {/* Outer ring */}
        <circle cx="80" cy="80" r="76" fill="url(#emblemBg)" stroke="url(#emblemGold)" strokeWidth="2.5" />
        <circle cx="80" cy="80" r="68" fill="none" stroke="url(#emblemGold)" strokeWidth="0.8" opacity="0.6" />

        {/* Crown */}
        <g transform="translate(80, 36)">
          <path
            d="M -12 0 L -8 -8 L -4 -3 L 0 -10 L 4 -3 L 8 -8 L 12 0 Z"
            fill="url(#emblemGold)"
            stroke="#a37e2a"
            strokeWidth="0.6"
          />
          <circle cx="-8" cy="-8" r="1.5" fill="#a37e2a" />
          <circle cx="0" cy="-10" r="1.5" fill="#a37e2a" />
          <circle cx="8" cy="-8" r="1.5" fill="#a37e2a" />
          <rect x="-12" y="0" width="24" height="3" fill="url(#emblemGold)" rx="1" />
        </g>

        {/* Laurel left */}
        <g transform="translate(28, 90) rotate(-15)">
          {[0, 12, 24, 36].map((y) => (
            <ellipse
              key={`l-${y}`}
              cx="0"
              cy={y}
              rx="4.5"
              ry="9"
              fill="url(#emblemGold)"
              transform={`rotate(${-30 - y / 3} 0 ${y})`}
            />
          ))}
          <line x1="0" y1="0" x2="0" y2="48" stroke="#a37e2a" strokeWidth="1" />
        </g>

        {/* Laurel right */}
        <g transform="translate(132, 90) rotate(15)">
          {[0, 12, 24, 36].map((y) => (
            <ellipse
              key={`r-${y}`}
              cx="0"
              cy={y}
              rx="4.5"
              ry="9"
              fill="url(#emblemGold)"
              transform={`rotate(${30 + y / 3} 0 ${y})`}
            />
          ))}
          <line x1="0" y1="0" x2="0" y2="48" stroke="#a37e2a" strokeWidth="1" />
        </g>

        {/* Center text */}
        <text
          x="80"
          y="74"
          textAnchor="middle"
          fontSize="10"
          fontWeight="700"
          fill="#5b6b85"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.05em"
        >
          受講生実績
        </text>
        <text
          x="80"
          y="96"
          textAnchor="middle"
          fontSize="18"
          fontWeight="900"
          fill="#1e3a5f"
          fontFamily="system-ui, sans-serif"
        >
          月商100万
        </text>
        <text
          x="80"
          y="114"
          textAnchor="middle"
          fontSize="12"
          fontWeight="900"
          fill="#a37e2a"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.1em"
        >
          達成者続出
        </text>
      </svg>
    </div>
  );
}
