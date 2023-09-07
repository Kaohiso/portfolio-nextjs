import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Welcome() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const cloudY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={ref}
      className="w-screen h-[100vh] lg:h-[170vh] overflow-hidden relative grid place-items-center"
    >
      {/**TEXT */}
      <motion.div
        className="h-full font-medium relative z-10 top-40 md:top-10 lg:top-40 text-white text-center text-4xl md:text-6xl lg:text-8xl"
        style={{
          y: textY,
        }}
      >
        <h1>Élevez l'expérience</h1>
        <h1>dessinez l'avenir</h1>
      </motion.div>
      {/**BG */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-b from-sky-200 to-white"
        style={{
          y: backgroundY,
        }}
      ></motion.div>
      {/**NUAGE */}
      <motion.div
        className="absolute inset-0 z-30"
        style={{
          backgroundImage: `url(/img/cloud.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          y: cloudY,
        }}
      ></motion.div>
      {/**MONTAGNE */}
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/img/mountainFade.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
      </div>
    </div>
  );
}
