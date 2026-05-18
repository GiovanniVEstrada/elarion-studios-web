'use client';

import { useEffect, useRef } from 'react';

const COLS     = 160;   // horizontal density — rows derived to keep cells square
const DAMPING  = 0.985;
const SPEED_SQ = 0.25;
const MIN_MS   = 900;
const MAX_MS   = 2400;

interface RippleFieldProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function RippleField({ className = '', style = {} }: RippleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Pin as non-nullable so closures don't lose the narrowing
    const el  = canvas;
    const gfx = ctx;

    let W = 0, H = 0, cellW = 0, cellH = 0;
    let rows = 0;
    let grid = new Float32Array(0);
    let prev = new Float32Array(0);

    const idx = (c: number, r: number) => r * COLS + c;

    function resize() {
      const dpr  = window.devicePixelRatio || 1;
      const rect = el.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      el.width  = W * dpr;
      el.height = H * dpr;
      gfx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cellW = W / COLS;
      // Derive rows so cells are square — ripples stay circular on any aspect ratio
      rows  = Math.max(1, Math.round(H / cellW));
      cellH = H / rows;
      grid  = new Float32Array(COLS * rows);
      prev  = new Float32Array(COLS * rows);
    }

    function drop(sx: number, sy: number, strength = 1.0) {
      const c   = Math.floor(sx / cellW);
      const r   = Math.floor(sy / cellH);
      const rad = 3;
      for (let dr = -rad; dr <= rad; dr++) {
        for (let dc = -rad; dc <= rad; dc++) {
          const nc = c + dc, nr = r + dr;
          if (nc < 0 || nc >= COLS || nr < 0 || nr >= rows) continue;
          const d = Math.sqrt(dc * dc + dr * dr);
          if (d <= rad) grid[idx(nc, nr)] += strength * (1 - d / rad);
        }
      }
    }

    function step() {
      const next = new Float32Array(COLS * rows);
      for (let r = 1; r < rows - 1; r++) {
        for (let c = 1; c < COLS - 1; c++) {
          const i    = idx(c, r);
          const lapl = grid[idx(c + 1, r)] + grid[idx(c - 1, r)]
                     + grid[idx(c, r + 1)] + grid[idx(c, r - 1)]
                     - 4 * grid[i];
          next[i] = (2 * grid[i] - prev[i] + SPEED_SQ * lapl) * DAMPING;
        }
      }
      prev = grid;
      grid = next;
    }

    function draw() {
      gfx.clearRect(0, 0, W, H);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < COLS; c++) {
          const v    = grid[idx(c, r)];
          const absV = v < 0 ? -v : v;
          if (absV < 0.004) continue;

          const bright = absV > 1 ? 1 : absV;
          const hue    = 240 + bright * 30;
          const sat    = 70  + bright * 30;
          const lit    = 10  + bright * 55;
          const alpha  = 0.08 + bright * 0.85;

          gfx.fillStyle = `hsla(${hue},${sat}%,${lit}%,${alpha})`;
          gfx.fillRect(c * cellW, r * cellH, cellW + 0.5, cellH + 0.5);
        }
      }
    }

    let nextDrop = performance.now() + MIN_MS + Math.random() * (MAX_MS - MIN_MS);

    function loop(ts: number) {
      if (ts >= nextDrop) {
        drop(
          W * (0.15 + Math.random() * 0.7),
          H * (0.15 + Math.random() * 0.7),
          0.8 + Math.random() * 0.8,
        );
        nextDrop = ts + MIN_MS + Math.random() * (MAX_MS - MIN_MS);
      }
      step();
      draw();
      rafRef.current = requestAnimationFrame(loop);
    }

    function handleClick(e: MouseEvent) {
      const rect = el.getBoundingClientRect();
      drop(e.clientX - rect.left, e.clientY - rect.top, 1.8);
    }

    function handleTouch(e: TouchEvent) {
      const rect = el.getBoundingClientRect();
      const t = e.changedTouches[0];
      drop(t.clientX - rect.left, t.clientY - rect.top, 1.8);
    }

    el.addEventListener('click', handleClick);
    el.addEventListener('touchend', handleTouch, { passive: true });

    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
      el.removeEventListener('click', handleClick);
      el.removeEventListener('touchend', handleTouch);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
    />
  );
}
