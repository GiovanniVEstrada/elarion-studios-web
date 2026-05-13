interface Orb {
  size: number;
  color: string;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  animation: "float-a" | "float-b" | "float-c";
  duration: number;
}

export default function OrbBackground({ orbs }: { orbs: Orb[] }) {
  return (
    <>
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="orb"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            animation: `${orb.animation} ${orb.duration}s ease-in-out infinite`,
          }}
        />
      ))}
    </>
  );
}
