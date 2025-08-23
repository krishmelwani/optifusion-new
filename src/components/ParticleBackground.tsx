// import { useEffect, useRef } from "react";

// export const ParticleBackground = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationRef = useRef<number>();

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     let time = 0;

//     const drawWaves = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const colors = [
//         "rgba(147, 51, 234, 0.3)", // violet
//         "rgba(59, 130, 246, 0.3)", // blue
//         "rgba(99, 102, 241, 0.2)", // indigo
//       ];

//       colors.forEach((color, index) => {
//         ctx.beginPath();
//         ctx.moveTo(0, canvas.height / 2);

//         for (let x = 0; x <= canvas.width; x++) {
//           const y =
//             canvas.height / 2.5 +
//             Math.sin(x * 0.01 + time / (2000 + index * 500)) *
//               (40 + index * 20); // wave height
//           ctx.lineTo(x, y);
//         }

//         ctx.lineTo(canvas.width, canvas.height);
//         ctx.lineTo(0, canvas.height);
//         ctx.closePath();

//         ctx.fillStyle = color;
//         ctx.fill();
//       });

//       time += 16; // smooth animation
//     };

//     const animate = () => {
//       drawWaves();
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     resizeCanvas();
//     animate();

//     window.addEventListener("resize", resizeCanvas);

//     return () => {
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
//       window.removeEventListener("resize", resizeCanvas);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full pointer-events-none"
//       style={{ zIndex: 1 }}
//     />
//   );
// };
import { useEffect, useRef } from "react";

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const shapes = Array.from({ length: 8 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 80 + Math.random() * 120,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((s) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(s.x, s.y, s.r * 0.2, s.x, s.y, s.r);
        gradient.addColorStop(0, "rgba(255,255,255,0.2)");
        gradient.addColorStop(1, "rgba(255,255,255,0.05)");
        ctx.fillStyle = gradient;
        ctx.fillRect(s.x - s.r, s.y - s.r, s.r * 2, s.r * 2);

        s.x += s.dx;
        s.y += s.dy;

        if (s.x < 0 || s.x > canvas.width) s.dx *= -1;
        if (s.y < 0 || s.y > canvas.height) s.dy *= -1;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};
