import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

export default function MultiLayerParallax() {
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
      className="w-screen h-[170vh] overflow-hidden relative grid place-items-center"
    >
      {/**TEXT */}
      <motion.div
        className="h-full font-bold relative z-10 top-40 text-white text-center"
        style={{
          y: textY,
        }}
      >
        <h1 className="text-8xl">Élevez l'expérience</h1>
        <h1 className="text-8xl">dessinez l'avenir</h1>
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
          backgroundImage: `url(/cloud.png)`,
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
          backgroundImage: `url(/mountain.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}
