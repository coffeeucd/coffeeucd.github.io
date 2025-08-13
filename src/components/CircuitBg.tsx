export default function CircuitBg() {
  return (
    <svg
      className="circuit-bg"
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* soft glow for traces + nodes */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* TRACES */}
      <path className="trace trace--anim" d="M80 520 H300 V380 H540" />
      <path className="trace trace--anim" d="M220 470 H420 V300 H760" />
      <path className="trace trace--anim" d="M1020 430 H900 V260 H640" />
      <path className="trace trace--anim" d="M1200 520 H980 V360 H820" />
      <path className="trace trace--anim" d="M114 420 H300 V220 H520" />

      {/* “vias” / nodes */}
      <circle className="node" cx="300" cy="380" r="3" />
      <circle className="node" cx="540" cy="380" r="3" />
      <circle className="node" cx="420" cy="300" r="3" />
      <circle className="node" cx="760" cy="300" r="3" />
      <circle className="node" cx="900" cy="260" r="3" />
      <circle className="node" cx="640" cy="260" r="3" />
      <circle className="node" cx="980" cy="360" r="3" />
      <circle className="node" cx="820" cy="360" r="3" />
      <circle className="node" cx="300" cy="220" r="3" />
      <circle className="node" cx="520" cy="220" r="3" />
    </svg>
  );
}
