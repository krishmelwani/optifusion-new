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

// src/components/VideoBackground.tsx

export const ParticleBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover -z-10"
    >
      <source
        src="https://dl.dropboxusercontent.com/scl/fi/cx4fpipeukfh49u7q9rd0/hero_video_loop.webm?rlkey=cjud1jlbme2it6lvfoqvoud8g&st=oyzbok9s&raw=1"
        type="video/webm"
      />
      Your browser does not support the video tag.
    </video>
  );
};
