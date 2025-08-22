import React, { useEffect, useRef, useState } from "react";

function ExpandingCard({ children, delay = 200 }) {
  const ref = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);
  useEffect(() => {
    if (ref.current) {
      const fullHeight = ref.current.scrollHeight;

      // start collapsed
      setMaxHeight(0);

      // after delay, expand to full height
      const t = setTimeout(() => {
        setMaxHeight(fullHeight);
      }, delay);

      return () => clearTimeout(t);
    }
  }, [delay]);

  return (
    <div
      style={{
        overflow: "hidden",
        maxHeight,
        transition: "max-height 500ms ease"
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow((s) => !s)}>
        Toggle Card
      </button>

      {show && (
        <ExpandingCard delay={300}>
          <p>
            This content expands smoothly when mounted.
          </p>
          <p>
            Its height starts at 0 and animates open.
          </p>
        </ExpandingCard>
      )}
    </div>
  );
}
