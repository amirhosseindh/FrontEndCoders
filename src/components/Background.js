import { useEffect, useRef } from "react";

export default function MouseGradient() {
  const rootRef = useRef(null);
  const target = useRef({ x: 50, y: 50 });
  const current = useRef({ x: 50, y: 50 });
  const rAF = useRef(null);

  const c1 = "#114ec1";
  const c2 = "#8645a1";
  const c3 = "#cd408f";
  const smooth = 0.12;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    root.style.setProperty("--c1", c1);
    root.style.setProperty("--c2", c2);
    root.style.setProperty("--c3", c3);

    const onPointer = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;

      target.current.x = (x / w) * 100;
      target.current.y = (y / h) * 100;
    };

    window.addEventListener("mousemove", onPointer, { passive: true });
    window.addEventListener("touchmove", onPointer, { passive: true });

    window.addEventListener("mouseleave", () => {
      target.current = { x: 50, y: 50 };
    });

    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * smooth;
      current.current.y += (target.current.y - current.current.y) * smooth;

      root.style.setProperty("--gx", current.current.x + "%");
      root.style.setProperty("--gy", current.current.y + "%");

      rAF.current = requestAnimationFrame(loop);
    };

    rAF.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onPointer);
      window.removeEventListener("touchmove", onPointer);
      cancelAnimationFrame(rAF.current);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed w-screen min-h-screen -z-10 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), var(--c1) 0%, var(--c2) 40%, var(--c3) 100%)",
        transition: "background 300ms linear",
      }}
    >
      {/* subtle animation layer */}
      <div
        className="absolute w-screen min-h-screen"
        style={{
          mixBlendMode: "soft-light",
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05), transparent 20%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.05), transparent 25%)",
          animation: "slowShift 10s infinite linear",
        }}
      />
    </div>
  );
}
