import React, { useEffect, useRef } from 'react';

/**
 * SMLogo — "SM" initials logo drawn in the style of the Kali Linux dragon.
 * The large "SM" letters are filled with rows of hex character strings,
 * alternating between teal (#4edce2) and magenta (#e91e8c), with a subtle
 * radial glow background. Positioned in the right-half blank section of the screen.
 *
 * Inspired by the Kali Linux ASCII art / hex fill dragon style.
 */

// Hex strings that scroll through the logo fill
const HEX_POOL = [
  '0xAF3B 0xCC2E 0x4D8F 0xFF1C',
  '2E4D8D 0xFF00 A3B2 0x1C9F',
  '0x8DBE 2A3C 0xCC 0x3BFF',
  '0xFF0A 0xBE2C 0x8D1F 4D3B',
  'A3B200 0x1CFF 0x4DAF 0x3BCE',
  '0xCC8D 0xFF2E 2A4D00 0xAF',
  '0x1C3B BE2A 0xAF8D 0xFFCC',
  '0x4D00 0xA3FF 0xBECC 2E8D',
];

const SMLogo = () => {
  const gId = useRef(`sm-${Math.random().toString(36).slice(2)}`).current;

  // Build rows of hex text to fill the clipped region
  const HEX_ROWS = Array.from({ length: 26 }, (_, i) =>
    HEX_POOL[i % HEX_POOL.length] + ' ' + HEX_POOL[(i + 3) % HEX_POOL.length]
  );

  const VB_W  = 400;
  const VB_H  = 260;
  const CX    = VB_W / 2;
  const CY    = VB_H / 2;
  const FONT  = 190;
  const LINE_H = 11;

  return (
    <div style={{
      position: 'fixed',
      left: '55%',
      top: '18%',
      zIndex: 50,
      pointerEvents: 'none',
      userSelect: 'none',
      opacity: 0.82,
    }}>
      <svg
        width="380"
        height="240"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Radial glow gradient */}
          <radialGradient id={`${gId}-glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#4edce2" stopOpacity="0.18" />
            <stop offset="60%"  stopColor="#1a3a42" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#000"    stopOpacity="0" />
          </radialGradient>

          {/* Clip to "SM" letters */}
          <clipPath id={`${gId}-clip`}>
            <text
              x={CX}
              y={CY + FONT * 0.38}
              textAnchor="middle"
              fontSize={FONT}
              fontFamily="'Fira Code', 'JetBrains Mono', monospace"
              fontWeight="bold"
              letterSpacing="-4"
            >
              SM
            </text>
          </clipPath>

          {/* Outer glow filter */}
          <filter id={`${gId}-filter`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Animated shimmer along the letters */}
          <linearGradient id={`${gId}-shimmer`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#4edce2">
              <animate attributeName="stop-color"
                values="#4edce2;#e91e8c;#4ee32c;#4edce2"
                dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%"  stopColor="#e91e8c">
              <animate attributeName="stop-color"
                values="#e91e8c;#4ee32c;#4edce2;#e91e8c"
                dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#4ee32c">
              <animate attributeName="stop-color"
                values="#4ee32c;#4edce2;#e91e8c;#4ee32c"
                dur="6s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>

        {/* Background radial glow */}
        <ellipse
          cx={CX} cy={CY}
          rx={VB_W * 0.52} ry={VB_H * 0.54}
          fill={`url(#${gId}-glow)`}
        />

        {/* ── Hex fill inside SM clip ── */}
        <g clipPath={`url(#${gId}-clip)`}>
          {/* Solid dark backing */}
          <rect x={0} y={0} width={VB_W} height={VB_H} fill="#0a0e1a" />

          {/* Hex text rows, alternating teal / magenta */}
          {HEX_ROWS.map((row, i) => (
            <text
              key={i}
              x={4}
              y={8 + i * LINE_H}
              fontSize="10"
              fontFamily="'Fira Code', monospace"
              fill={i % 3 === 0 ? '#4edce2' : i % 3 === 1 ? '#e91e8c' : '#4ee32c'}
              opacity={0.85 + (i % 3) * 0.05}
            >
              {row}
            </text>
          ))}
        </g>

        {/* ── Letter outline (animated gradient stroke) ── */}
        <text
          x={CX}
          y={CY + FONT * 0.38}
          textAnchor="middle"
          fontSize={FONT}
          fontFamily="'Fira Code', 'JetBrains Mono', monospace"
          fontWeight="bold"
          letterSpacing="-4"
          fill="none"
          stroke={`url(#${gId}-shimmer)`}
          strokeWidth="1.5"
          opacity="0.7"
          filter={`url(#${gId}-filter)`}
        >
          SM
        </text>

        {/* ── Subtle dotted grid overlay (Kali dragon dot-matrix vibe) ── */}
        <g opacity="0.12">
          {Array.from({ length: 18 }, (_, row) =>
            Array.from({ length: 28 }, (_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 15 + 5}
                cy={row * 15 + 5}
                r={1.2}
                fill="#4edce2"
              />
            ))
          )}
        </g>

        {/* Small decorative "Menroy" label under the logo */}
        <text
          x={CX}
          y={VB_H - 6}
          textAnchor="middle"
          fontSize="11"
          fontFamily="'Fira Code', monospace"
          fill="#4edce2"
          opacity="0.5"
          letterSpacing="4"
        >
          MENROY
        </text>
      </svg>
    </div>
  );
};

export default SMLogo;
