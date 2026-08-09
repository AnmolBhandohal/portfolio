export function MomentumIllustration() {
  return (
    <svg
      viewBox="0 0 360 250"
      role="img"
      aria-label="Timing diagram comparing a chopped Pomodoro focus signal against one long unbroken hyperfocus block marked with streak points"
    >
      <text className="lbl" x="16" y="30" fill="#20242B">
        Focus — logic view
      </text>
      {/* pomodoro trace */}
      <text className="lbl" x="16" y="76">
        Pomodoro
      </text>
      <path
        className="d-thin"
        d="M92 88V56h36v32h12V56h36v32h12V56h36v32h12V56h36v32h12V56h24"
        fill="none"
        stroke="#20242B"
        strokeWidth="1.6"
      />
      {/* forced break markers */}
      <path
        className="d-thin dash"
        d="M134 50v52M182 50v52M230 50v52M278 50v52"
        stroke="#5D6470"
      />
      <text className="lbl" x="238" y="118">
        Forced breaks ✕
      </text>
      {/* hyperfocus trace */}
      <text className="lbl lbl-cu" x="16" y="160">
        Hyperfocus
      </text>
      <path
        className="cu"
        d="M92 172v-32h216v32h24"
        strokeWidth="2.4"
        fill="none"
      />
      {/* streak orbs on the high segment */}
      <circle className="cu-fill" cx="132" cy="140" r="4" />
      <circle className="cu-fill" cx="180" cy="140" r="4" />
      <circle className="cu-fill" cx="228" cy="140" r="4" />
      <circle className="cu-fill" cx="276" cy="140" r="4" />
      <text className="lbl lbl-cu" x="120" y="128">
        streaks scored, flow unbroken
      </text>
      {/* axis */}
      <path className="d-thin" d="M92 206h248" />
      <g stroke="#5D6470" strokeWidth="1">
        <path d="M92 203v6M140 203v6M188 203v6M236 203v6M284 203v6M332 203v6" />
      </g>
      <text className="lbl" x="88" y="224">
        0
      </text>
      <text className="lbl" x="308" y="224">
        t (min)
      </text>
    </svg>
  );
}
