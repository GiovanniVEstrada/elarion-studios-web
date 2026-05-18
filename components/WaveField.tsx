'use client';

import { useEffect, useRef } from 'react';

const CFG = {
  lineCount:     22,
  pointsPerLine: 120,
  amplitude:     38,
  speedBase:     0.000018,
  chaos:         0.28,
  freqX1: 3.8,  freqZ1: 1.2,
  freqX2: 6.5,  freqZ2: 2.1,
  freqX3: 2.1,  freqZ3: 3.4,
  freqXc: 11.0, freqZc: 7.0,
};

function getWaveY(u: number, v: number, time: number, cfg: typeof CFG): number {
  const w1 = Math.sin(u * cfg.freqX1 + v * cfg.freqZ1 + time)       * cfg.amplitude;
  const w2 = Math.sin(u * cfg.freqX2 - v * cfg.freqZ2 + time * 0.7) * cfg.amplitude * 0.45;
  const w3 = Math.cos(u * cfg.freqX3 + v * cfg.freqZ3 + time * 0.5) * cfg.amplitude * 0.3;
  const wc = Math.sin(u * cfg.freqXc + v * cfg.freqZc + time * 1.4) * cfg.amplitude * 0.15 * cfg.chaos;
  return w1 + w2 + w3 + wc;
}

type GlowState = {
  li:        number;
  pos:       number;  // center in u-space; can exceed ±1 while off-screen
  dir:       1 | -1;
  speed:     number;  // u per frame
  halfWidth: number;
};

function spawnGlow(li: number): GlowState {
  const dir: 1 | -1  = Math.random() < 0.5 ? 1 : -1;
  const halfWidth     = 0.22 + Math.random() * 0.18;
  return {
    li,
    pos:   dir === 1 ? -1 - halfWidth - 0.05 : 1 + halfWidth + 0.05,
    dir,
    speed: 0.0018 + Math.random() * 0.0022,  // ~12–30 s to cross
    halfWidth,
  };
}

interface WaveFieldProps {
  className?: string;
  style?: React.CSSProperties;
  lineCount?: number;
  amplitude?: number;
  chaos?: number;
}

export default function WaveField({ className = '', style = {}, lineCount, amplitude, chaos }: WaveFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const tRef      = useRef(0);
  const glowsRef  = useRef<GlowState[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cfg = {
      ...CFG,
      ...(lineCount !== undefined && { lineCount }),
      ...(amplitude !== undefined && { amplitude }),
      ...(chaos     !== undefined && { chaos }),
    };

    // Seed ~35 % of lines with glows at random positions already on-screen
    const active = new Set<number>();
    const initial: GlowState[] = [];
    for (let li = 0; li < cfg.lineCount; li++) {
      if (Math.random() < 0.35) {
        const g = spawnGlow(li);
        // Start somewhere mid-travel so the screen isn't empty at load
        g.pos = (Math.random() * 2) - 1;
        initial.push(g);
        active.add(li);
      }
    }
    glowsRef.current = initial;

    let W = 0;
    let H = 0;

    function resize() {
      const dpr  = window.devicePixelRatio || 1;
      const rect = canvas!.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas!.width  = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      tRef.current += cfg.speedBase * 1000;
      const t = tRef.current;

      // --- update glow positions, recycle exited ones onto new lines ---
      const occupied = new Set(glowsRef.current.map(g => g.li));
      const next: GlowState[] = [];

      for (const g of glowsRef.current) {
        g.pos += g.dir * g.speed;
        const offScreen = g.pos - g.halfWidth > 1.05 || g.pos + g.halfWidth < -1.05;

        if (offScreen) {
          // Pick a line that has no glow currently
          occupied.delete(g.li);
          const available: number[] = [];
          for (let i = 0; i < cfg.lineCount; i++) {
            if (!occupied.has(i)) available.push(i);
          }
          if (available.length > 0) {
            const newLi = available[Math.floor(Math.random() * available.length)];
            const replacement = spawnGlow(newLi);
            next.push(replacement);
            occupied.add(newLi);
          }
        } else {
          next.push(g);
        }
      }

      glowsRef.current = next;

      // Build per-line lookup for the draw loop
      const glowByLine = new Map<number, GlowState>();
      for (const g of next) glowByLine.set(g.li, g);

      // --- draw ---
      const padY   = H * 0.18;
      const fieldW = W;
      const fieldH = H - padY * 2;

      for (let li = 0; li < cfg.lineCount; li++) {
        const v        = (li / (cfg.lineCount - 1)) * 2 - 1;
        const lineNorm = li / (cfg.lineCount - 1);

        ctx!.beginPath();
        for (let pi = 0; pi <= cfg.pointsPerLine; pi++) {
          const u    = (pi / cfg.pointsPerLine) * 2 - 1;
          const rawY = getWaveY(u, v, t, cfg);
          const sx   = ((u + 1) / 2) * fieldW;
          const sy   = padY + lineNorm * fieldH - rawY;
          pi === 0 ? ctx!.moveTo(sx, sy) : ctx!.lineTo(sx, sy);
        }

        const hue   = 200 + lineNorm * 50;
        const sat   = 50  + lineNorm * 30;
        const lit   = 30  + lineNorm * 28;
        const alpha = 0.28 + lineNorm * 0.52;

        ctx!.strokeStyle = `hsla(${hue},${sat}%,${lit}%,${alpha})`;
        ctx!.lineWidth   = 0.9 + lineNorm * 0.7;
        ctx!.stroke();

        // Glow pass — only the moving window segment
        const glow = glowByLine.get(li);
        if (glow) {
          const loU       = glow.pos - glow.halfWidth;
          const hiU       = glow.pos + glow.halfWidth;
          const glowStart = Math.max(0,                 Math.round((loU + 1) / 2 * cfg.pointsPerLine));
          const glowEnd   = Math.min(cfg.pointsPerLine, Math.round((hiU + 1) / 2 * cfg.pointsPerLine));

          if (glowEnd > glowStart) {
            ctx!.beginPath();
            let first = true;
            for (let pi = glowStart; pi <= glowEnd; pi++) {
              const u    = (pi / cfg.pointsPerLine) * 2 - 1;
              const rawY = getWaveY(u, v, t, cfg);
              const sx   = ((u + 1) / 2) * fieldW;
              const sy   = padY + lineNorm * fieldH - rawY;
              if (first) { ctx!.moveTo(sx, sy); first = false; }
              else ctx!.lineTo(sx, sy);
            }

            const glowLit = Math.min(lit + 16, 62);
            ctx!.save();
            ctx!.shadowColor = `hsla(${hue},${sat}%,${glowLit}%,0.5)`;
            ctx!.shadowBlur  = 14;
            ctx!.strokeStyle = `hsla(${hue},${sat}%,${glowLit}%,0.65)`;
            ctx!.lineWidth   = (0.9 + lineNorm * 0.7) * 1.5;
            ctx!.stroke();
            ctx!.restore();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [lineCount, amplitude, chaos]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
    />
  );
}
