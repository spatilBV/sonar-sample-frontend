"use client";

import { useState } from "react";

export function Counter({ initial }: { initial: number }) {
  const [count, setCount] = useState(initial);

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <button
        type="button"
        onClick={() => setCount((c) => c - 1)}
        style={buttonStyle}
      >
        −
      </button>
      <span style={{ margin: "0 1rem", fontSize: "1.25rem" }}>{count}</span>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        style={buttonStyle}
      >
        +
      </button>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  background: "#38bdf8",
  color: "#0f172a",
  border: "none",
  borderRadius: 6,
  padding: "0.4rem 0.9rem",
  fontSize: "1rem",
  cursor: "pointer",
};
