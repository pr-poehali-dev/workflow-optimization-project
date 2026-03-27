import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/60 z-[5]" />
      <h3 className="absolute top-12 left-6 text-yellow-400 uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest font-semibold">
        Таблица лидеров
      </h3>

      <div
        id="leaderboard"
        className="absolute bottom-12 left-6 right-6 z-10 max-w-2xl"
      >
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
          Каждый матч — шаг к вершине. Твоё имя должно быть в топе.
        </p>
        <button className="border border-yellow-400 text-yellow-400 px-6 py-2 uppercase text-sm tracking-wide hover:bg-yellow-400 hover:text-black transition-all duration-300">
          Смотреть лидеров
        </button>
      </div>
    </div>
  );
}