import { motion } from "framer-motion";

const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    size: Math.random() * 5 + 2,
    duration: Math.random() * 12 + 6,
    delay: Math.random() * 5,
  }));
};

const particles = generateParticles(70);

const Partical = () => {
  return (
    <>
      {/* Animated Gradient Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-10%] right-[-10%] w-150 h-150 bg-white blur-[130px] rounded-full"
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-black/80 rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `calc(50% + ${particle.x}vw)`,
            top: `calc(50% + ${particle.y}vh)`,
          }}
          animate={{
            y: [-40, 40, -40],
            opacity: [1, 0.5, 0.1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
};

export default Partical;
